import React from 'react';
import { format } from 'date-fns';
import { X, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import type { DroneReport } from '../../types/report';

interface DayReportsModalProps {
  date: Date;
  reports: DroneReport[];
  onClose: () => void;
  onReportClick: (report: DroneReport) => void;
}

export function DayReportsModal({ date, reports, onClose, onReportClick }: DayReportsModalProps) {
  const getStatusIcon = (status: DroneReport['status']) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Reports for {format(date, 'MMMM d, yyyy')}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {reports.length === 0 ? (
            <p className="text-center text-gray-500">No reports for this date.</p>
          ) : (
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onReportClick(report)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(report.status)}
                      <div>
                        <p className="font-medium">Report #{report.id}</p>
                        <p className="text-sm text-gray-500">
                          {format(new Date(report.dateTime), 'h:mm a')}
                        </p>
                      </div>
                    </div>
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${report.status === 'completed' ? 'bg-green-100 text-green-800' :
                        report.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}
                    `}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}