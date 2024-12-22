import React, { useEffect, useState } from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { reportService } from '../../services/reportService';
import { ReportDisplay } from '../reports/ReportDisplay';

export function RecentReports() {
  const [reports, setReports] = useState<DroneReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<DroneReport | null>(null);

  useEffect(() => {
    // Initial load
    setReports(reportService.getReports());

    // Set up interval to check for new reports
    const interval = setInterval(() => {
      setReports(reportService.getReports());
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Recent Reports</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    {report.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(report.dateTime).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {`${report.location.latitude.toFixed(4)}°, ${report.location.longitude.toFixed(4)}°`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${report.status === 'completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'}`}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedReport && (
        <ReportDisplay
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
}