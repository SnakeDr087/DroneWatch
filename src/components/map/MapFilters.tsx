import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { DroneReport } from '../../types/report';

interface MapFiltersProps {
  reports: DroneReport[];
  onFilterChange: (filtered: DroneReport[]) => void;
  onClose: () => void;
}

export function MapFilters({ reports, onFilterChange, onClose }: MapFiltersProps) {
  const [filters, setFilters] = useState({
    status: [] as string[],
    emergencyStatus: [] as string[]
  });

  const handleFilterChange = (type: 'status' | 'emergencyStatus', value: string) => {
    setFilters(prev => {
      const updated = {
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter(v => v !== value)
          : [...prev[type], value]
      };

      // Apply filters
      const filtered = reports.filter(report => {
        const statusMatch = updated.status.length === 0 || updated.status.includes(report.status);
        const emergencyMatch = updated.emergencyStatus.length === 0 || 
          updated.emergencyStatus.includes(report.emergencyStatus);
        return statusMatch && emergencyMatch;
      });

      onFilterChange(filtered);
      return updated;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Filters</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
          {['draft', 'submitted', 'processing', 'completed'].map(status => (
            <label key={status} className="flex items-center mt-1">
              <input
                type="checkbox"
                checked={filters.status.includes(status)}
                onChange={() => handleFilterChange('status', status)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Emergency Status</h4>
          {['routine', 'urgent', 'emergency'].map(status => (
            <label key={status} className="flex items-center mt-1">
              <input
                type="checkbox"
                checked={filters.emergencyStatus.includes(status)}
                onChange={() => handleFilterChange('emergencyStatus', status)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}