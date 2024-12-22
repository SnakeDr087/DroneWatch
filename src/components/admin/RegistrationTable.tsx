import React, { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import { RegistrationFilters } from './RegistrationFilters';
import { RegistrationRow } from './RegistrationRow';
import { Pagination } from './Pagination';
import { useRegistrations } from '../../hooks/useRegistrations';
import { exportToCSV } from '../../utils/export';

export function RegistrationTable() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    role: '',
    dateRange: { start: '', end: '' }
  });
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { 
    registrations,
    totalPages,
    isLoading,
    handleApprove,
    handleDeny
  } = useRegistrations(page, filters, search);

  const handleExport = () => {
    const data = selectedIds.length > 0
      ? registrations.filter(reg => selectedIds.includes(reg.id))
      : registrations;
    exportToCSV(data, 'registrations.csv');
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Pending Registrations</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleExport}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search registrations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
        </div>

        {showFilters && (
          <RegistrationFilters
            filters={filters}
            onChange={setFilters}
            onClose={() => setShowFilters(false)}
          />
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setSelectedIds(e.target.checked 
                      ? registrations.map(r => r.id)
                      : []
                    );
                  }}
                  className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
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
            {registrations.map((registration) => (
              <RegistrationRow
                key={registration.id}
                registration={registration}
                isSelected={selectedIds.includes(registration.id)}
                onSelect={(id) => {
                  setSelectedIds(prev => 
                    prev.includes(id)
                      ? prev.filter(i => i !== id)
                      : [...prev, id]
                  );
                }}
                onApprove={handleApprove}
                onDeny={handleDeny}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}