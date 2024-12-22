import React from 'react';

interface DetailsFieldsProps {
  values: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function DetailsFields({ values, onChange, errors }: DetailsFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">Sighting Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">Date and Time</label>
          <input
            type="datetime-local"
            value={values.dateTime}
            onChange={(e) => onChange('dateTime', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.dateTime && (
            <p className="mt-1 text-sm text-red-600">{errors.dateTime}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Duration (minutes)</label>
          <input
            type="number"
            min="1"
            value={values.duration}
            onChange={(e) => onChange('duration', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Drone Type</label>
          <input
            type="text"
            value={values.droneType}
            onChange={(e) => onChange('droneType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Estimated Altitude (feet)</label>
          <input
            type="number"
            min="0"
            value={values.altitude}
            onChange={(e) => onChange('altitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Weather Conditions</label>
          <input
            type="text"
            value={values.weather}
            onChange={(e) => onChange('weather', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Number of Witnesses</label>
          <input
            type="number"
            min="1"
            value={values.witnesses}
            onChange={(e) => onChange('witnesses', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm text-gray-700">Description</label>
          <textarea
            value={values.description}
            onChange={(e) => onChange('description', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Verification Status</label>
          <select
            value={values.status}
            onChange={(e) => onChange('status', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="unverified">Unverified</option>
          </select>
        </div>
      </div>
    </div>
  );
}