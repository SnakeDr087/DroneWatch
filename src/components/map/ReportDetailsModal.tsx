import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  User, 
  Shield, 
  Camera, 
  FileText, 
  Download 
} from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';
import { StatusBadge } from '../shared/StatusBadge';
import { EmergencyBadge } from '../shared/EmergencyBadge';
import { ReportEvidence } from './ReportEvidence';
import { ReportCharacteristics } from './ReportCharacteristics';
import { WitnessInfo } from './WitnessInfo';

interface ReportDetailsModalProps {
  report: DroneReport;
  onClose: () => void;
}

export function ReportDetailsModal({ report, onClose }: ReportDetailsModalProps) {
  const handleDownload = () => {
    // Implement report download logic
    console.log('Downloading report:', report.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold">Report Details #{report.id}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Status Badges */}
          <div className="flex items-center justify-between">
            <StatusBadge status={report.status} />
            <EmergencyBadge status={report.emergencyStatus} />
          </div>

          {/* Time and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Reported Time</p>
                <p className="text-sm text-gray-600">{formatDateTime(report.dateTime)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Location</p>
                <p className="text-sm text-gray-600">
                  {report.location.latitude.toFixed(6)}°, {report.location.longitude.toFixed(6)}°
                </p>
              </div>
            </div>
          </div>

          {/* Drone Characteristics */}
          <ReportCharacteristics characteristics={report.droneCharacteristics} />

          {/* Behavior Description */}
          {report.behavior?.description && (
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Observed Behavior</h3>
              <p className="text-gray-700">{report.behavior.description}</p>
            </div>
          )}

          {/* Witness Information */}
          <WitnessInfo witness={report.witness} />

          {/* Evidence */}
          {report.evidence && report.evidence.length > 0 && (
            <ReportEvidence evidence={report.evidence} />
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-4 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Close
          </button>
          <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}