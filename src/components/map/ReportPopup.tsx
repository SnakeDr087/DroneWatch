import React from 'react';
import { Eye, Download, MapPin, Clock, User, Shield, AlertTriangle } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';
import { ReportDetailsModal } from './ReportDetailsModal';

interface ReportPopupProps {
  report: DroneReport;
}

export function ReportPopup({ report }: ReportPopupProps) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <div className="p-4 min-w-[300px]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Report #{report.id}
          </h3>
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${report.emergencyStatus === 'emergency' ? 'bg-red-100 text-red-800' :
              report.emergencyStatus === 'urgent' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'}
          `}>
            {report.emergencyStatus.charAt(0).toUpperCase() + report.emergencyStatus.slice(1)}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {formatDateTime(report.dateTime)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {report.location.latitude.toFixed(6)}°, {report.location.longitude.toFixed(6)}°
          </div>
          {report.behavior?.description && (
            <p className="text-sm text-gray-700 mt-2">
              {report.behavior.description.slice(0, 100)}
              {report.behavior.description.length > 100 ? '...' : ''}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${report.status === 'completed' ? 'bg-green-100 text-green-800' :
                report.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'}
            `}>
              {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowDetails(true)}
              className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50"
              title="View Details"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              className="p-2 text-green-600 hover:text-green-800 rounded-full hover:bg-green-50"
              title="Download Report"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <ReportDetailsModal
          report={report}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}