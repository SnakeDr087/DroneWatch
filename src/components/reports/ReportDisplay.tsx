import React from 'react';
import { Shield } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';

interface ReportDisplayProps {
  report: DroneReport;
  onClose?: () => void;
}

export function ReportDisplay({ report, onClose }: ReportDisplayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-yellow-500" />
            <h2 className="text-xl font-bold">Report Details</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
          )}
        </div>

        <div className="p-6">
          <pre className="whitespace-pre-wrap font-mono text-sm">
{`Subject: Suspicious Drone Activity Report - ${report.location.latitude}, ${report.location.longitude} - ${formatDateTime(report.dateTime)}

Dear ${report.witness.name},

I am writing to report suspicious drone activity observed at the following location:

INCIDENT DETAILS
---------------
Date/Time: ${formatDateTime(report.dateTime)}
Location: ${report.location.latitude}, ${report.location.longitude}

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
${report.witness.name}`}
          </pre>
        </div>
      </div>
    </div>
  );
}