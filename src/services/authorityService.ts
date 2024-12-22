import axios from 'axios';
import type { Authority } from '../types/authorities';
import type { DroneReport } from '../types/report';

class AuthorityService {
  private static instance: AuthorityService;
  private readonly FAA_EMAIL = 'uashelp@faa.gov';
  private readonly POLICE_DEPT_API = 'https://api.usa.gov/crime/fbi/police-departments';

  private constructor() {}

  static getInstance(): AuthorityService {
    if (!AuthorityService.instance) {
      AuthorityService.instance = new AuthorityService();
    }
    return AuthorityService.instance;
  }

  async findLocalAuthorities(latitude: number, longitude: number): Promise<Authority[]> {
    try {
      // First, reverse geocode the coordinates to get the jurisdiction
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );

      const address = response.data.address;
      const city = address.city || address.town || address.village;
      const state = address.state;
      const county = address.county;

      // For demo purposes, construct a local authority based on the location
      const localAuthority: Authority = {
        id: 'local-pd',
        name: `${city} Police Department`,
        type: 'local',
        jurisdiction: {
          type: 'city',
          area: [city],
        },
        contact: {
          emergency: '911',
          nonEmergency: this.formatNonEmergencyNumber(city, state),
          email: `info@${city.toLowerCase().replace(/\s+/g, '')}pd.gov`,
        },
        reportingProtocol: {
          method: 'email',
          format: 'text',
        },
      };

      return [localAuthority];
    } catch (error) {
      console.error('Error finding local authorities:', error);
      throw new Error('Unable to determine local authorities. Please contact your local law enforcement directly.');
    }
  }

  private formatNonEmergencyNumber(city: string, state: string): string {
    // In a real implementation, this would lookup the actual non-emergency number
    // For demo purposes, return a placeholder
    return '(XXX) XXX-XXXX';
  }

  generateEmailContent(report: DroneReport, authority: Authority): string {
    const timestamp = new Date(report.dateTime).toLocaleString();
    const location = `${report.location.latitude}, ${report.location.longitude}`;

    return `
Subject: Suspicious Drone Activity Report - ${location} - ${timestamp}

Dear ${authority.name},

I am writing to report suspicious drone activity observed at the following location:

INCIDENT DETAILS
---------------
Date/Time: ${timestamp}
Location: ${location}
${report.location.address ? `Address: ${report.location.address}` : ''}

DRONE CHARACTERISTICS
-------------------
Type: ${report.droneCharacteristics.type || 'Unknown'}
Color: ${report.droneCharacteristics.color || 'Unknown'}
Size: ${report.droneCharacteristics.size || 'Unknown'}
Estimated Altitude: ${report.droneCharacteristics.estimatedAltitude || 'Unknown'}

FLIGHT BEHAVIOR
-------------
${report.behavior.description || 'No behavior description provided'}

WITNESS INFORMATION
-----------------
Name: ${report.witness.name}
Phone: ${report.witness.phone}
Email: ${report.witness.email}

ADDITIONAL DETAILS
----------------
Impact on Local Activities: ${report.localImpact || 'None reported'}
Similar Incidents: ${report.similarIncidents || 'None reported'}
Actions Taken: ${report.immediateActions?.join(', ') || 'None'}

Evidence has been collected and can be provided upon request.

Please contact me if you need any additional information about this incident.

Sincerely,
${report.witness.name}
    `.trim();
  }

  generateFAAReport(report: DroneReport): string {
    return this.generateEmailContent(report, {
      id: 'faa',
      name: 'Federal Aviation Administration',
      type: 'federal',
      jurisdiction: {
        type: 'federal',
        area: ['United States'],
      },
      contact: {
        emergency: '1-866-835-5322',
        nonEmergency: '1-866-835-5322',
        email: this.FAA_EMAIL,
      },
      reportingProtocol: {
        method: 'email',
        format: 'text',
      },
    });
  }
}

export const authorityService = AuthorityService.getInstance();