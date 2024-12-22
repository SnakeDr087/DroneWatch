import React from 'react';
import { X, Calendar } from 'lucide-react';

interface RegistrationFiltersProps {
  filters: {
    status: string;
    role: string;
    dateRange: {
      start: string;
      end: string;
    };
  };
  onChange: (filters: any) => void;
  onClose: () => void;
}

export function RegistrationFilters({ filters, onChange, onClose }: RegistrationFiltersProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-700">Filters</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            value={filters.role}
            onChange={(e) => onChange({ ...filters, role: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">All</option>
            <option value="law_enforcement">Law Enforcement</option>
            <option value="security">Security Professional</option>
            <option value="private_citizen">Private Citizen</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={filters.dateRange.start}
                onChange={(e) => onChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, start: e.target.value }
                })}
                className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={filters.dateRange.end}
                onChange={(e) => onChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, end: e.target.value }
                })}
                className="pl-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}