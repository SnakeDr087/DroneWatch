import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

export default function SampleReport() {
  const reports = [
    {
      id: "DR-2024-001",
      date: "2024-03-15",
      category: "Surveillance",
      status: "Processing",
    },
    {
      id: "DR-2024-002",
      date: "2024-03-14",
      category: "Restricted Area",
      status: "Completed",
    },
    {
      id: "DR-2024-003",
      date: "2024-03-13",
      category: "Night Flight",
      status: "Under Review",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">SAMPLE REPORT</h2>
          <p className="text-gray-600">Recent drone incident reports and their current status</p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
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
                  <td className="px-6 py-4 whitespace-nowrap">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        report.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
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
      </div>
    </section>
  );
}