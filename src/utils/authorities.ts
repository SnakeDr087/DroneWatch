import { Authority } from '../types/authorities';

export const findRelevantAuthorities = async (
  latitude: number,
  longitude: number
): Promise<Authority[]> => {
  // In a real application, this would make an API call to lookup authorities
  // based on the coordinates. For now, we'll return mock data.
  return [
    {
      id: 'local-pd',
      name: 'Local Police Department',
      type: 'local',
      jurisdiction: {
        type: 'city',
        area: ['City Name'],
      },
      contact: {
        emergency: '911',
        nonEmergency: '555-0123',
        email: 'police@cityname.gov',
      },
      reportingProtocol: {
        method: 'api',
        format: 'json',
      },
    },
    {
      id: 'state-fusion',
      name: 'State Fusion Center',
      type: 'state',
      jurisdiction: {
        type: 'state',
        area: ['State Name'],
      },
      contact: {
        emergency: '1-800-555-0000',
        nonEmergency: '1-800-555-0001',
        email: 'fusion@state.gov',
      },
      reportingProtocol: {
        method: 'api',
        format: 'json',
      },
    },
    {
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
        email: 'dronereport@faa.gov',
      },
      reportingProtocol: {
        method: 'api',
        format: 'json',
      },
    },
  ];
};