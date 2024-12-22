import React from 'react';
import { X, MapPin, Clock, AlertTriangle } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';
import { StatusBadge } from '../shared/StatusBadge';
import { EmergencyBadge } from '../shared/EmergencyBadge';

interface CalendarEventModalProps {
  report: DroneReport;
  onClose: () => void;
  onViewFullReport: () => void;
}

export function CalendarEventModal({ report, onClose, onViewFullReport }: CalendarEventModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Report Details</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <StatusBadge status={report.status} />
            <EmergencyBadge status={report.emergencyStatus} />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{formatDateTime(report.dateTime)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>
                {report.location.latitude.toFixed(6)}°, {report.location.longitude.toFixed(6)}°
              </span>
            </div>
            {report.behavior?.description && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Description</h4>
                <p className="text-sm text-gray-600">{report.behavior.description}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <button
              onClick={onViewFullReport}
              className="px-4 py-2 text-sm bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
            >
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}