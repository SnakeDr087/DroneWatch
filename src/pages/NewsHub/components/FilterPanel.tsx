import React from 'react';
import { Filter, Mail } from 'lucide-react';
import type { NewsFilters } from '../types';

interface FilterPanelProps {
  filters: NewsFilters;
  onChange: (filters: NewsFilters) => void;
  onSubscribe: (email: string) => void;
}

export function FilterPanel({ filters, onChange, onSubscribe }: FilterPanelProps) {
  const [email, setEmail] = React.useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Filter className="h-5 w-5" />
        Filters
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Region</label>
          <select
            value={filters.region}
            onChange={(e) => onChange({ ...filters, region: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Regions</option>
            <option value="nj">New Jersey</option>
            <option value="northeast">Northeast US</option>
            <option value="global">Global</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time Period</label>
          <select
            value={filters.timePeriod}
            onChange={(e) => onChange({ ...filters, timePeriod: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="all">All Time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Source Type</label>
          <div className="mt-2 space-y-2">
            {['news', 'academic', 'government'].map(source => (
              <label key={source} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.sources.includes(source)}
                  onChange={(e) => {
                    const newSources = e.target.checked
                      ? [...filters.sources, source]
                      : filters.sources.filter(s => s !== source);
                    onChange({ ...filters, sources: newSources });
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {source.charAt(0).toUpperCase() + source.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Credibility Score
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.credibilityThreshold}
            onChange={(e) => onChange({ 
              ...filters, 
              credibilityThreshold: parseInt(e.target.value) 
            })}
            className="mt-2 w-full"
          />
          <div className="text-sm text-gray-500 text-center">
            {filters.credibilityThreshold}%
          </div>
        </div>

        <div className="border-t pt-4 mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Email Notifications
          </h3>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              onClick={() => onSubscribe(email)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Mail className="h-4 w-4" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}