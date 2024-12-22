import React, { useState } from 'react';
import { Eye, Download, FileText, Search, Calendar } from 'lucide-react';

interface DateRange {
  startDate: string;
  endDate: string;
}

export function ReportList() {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '',
    endDate: ''
  });

  const reports = [
    {
      date: "2024-03-15",
      location: "40.7128° N, 74.0060° W",
      category: "Surveillance",
      status: "Processing",
    },
    {
      date: "2024-03-14",
      location: "34.0522° N, 118.2437° W",
      category: "Restricted Area",
      status: "Completed",
    },
    {
      date: "2024-03-13",
      location: "41.8781° N, 87.6298° W",
      category: "Night Flight",
      status: "Under Review",
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement date range filtering logic here
    console.log('Searching reports between:', dateRange);
  };

  return (
    <div className="space-y-6">
      {/* Date Range Search */}
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Search className="h-5 w-5" />
          Search Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <div className="mt-1 relative">
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <div className="mt-1 relative">
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search Reports
        </button>
      </form>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
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
              {reports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      {report.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.location}</td>
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
    </div>
  );
}