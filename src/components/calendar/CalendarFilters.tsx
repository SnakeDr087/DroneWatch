import React from 'react';
import { Filter, Calendar } from 'lucide-react';

interface CalendarFiltersProps {
  filters: {
    status: string;
    priority: string;
    dateRange: {
      start: string;
      end: string;
    };
  };
  onChange: (filters: any) => void;
}

export function CalendarFilters({ filters, onChange }: CalendarFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            value={filters.priority}
            onChange={(e) => onChange({ ...filters, priority: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="all">All</option>
            <option value="routine">Routine</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
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