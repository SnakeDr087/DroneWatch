import React from 'react';
import { X, Download, MapPin, Calendar, Clock, User } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';

interface ReportModalProps {
  report: DroneReport;
  onClose: () => void;
}

export function ReportModal({ report, onClose }: ReportModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Report Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>{formatDateTime(report.dateTime)}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>
                {report.location.latitude.toFixed(6)}°, 
                {report.location.longitude.toFixed(6)}°
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span className={`px-2 py-1 rounded-full text-sm font-medium
              ${report.status === 'completed' ? 'bg-green-100 text-green-800' :
                report.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'}`}>
              {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
            </span>
          </div>

          {/* Witness Information */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <User className="h-5 w-5" />
              Witness Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <span className="font-medium">Name:</span> {report.witness.name}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {report.witness.phone}
              </div>
              <div className="col-span-2">
                <span className="font-medium">Email:</span> {report.witness.email}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-4 flex justify-end space-x-4">
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Download className="h-5 w-5" />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}