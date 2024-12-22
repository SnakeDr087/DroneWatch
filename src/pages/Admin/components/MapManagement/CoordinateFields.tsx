import React from 'react';
import { MapPin } from 'lucide-react';

interface CoordinateFieldsProps {
  values: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
  onGetCurrentLocation: () => void;
}

export function CoordinateFields({ values, onChange, errors, onGetCurrentLocation }: CoordinateFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">Coordinates *</h3>
        <button
          type="button"
          onClick={onGetCurrentLocation}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
        >
          <MapPin className="h-4 w-4" />
          Get Current Location
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">Latitude (-90 to 90)</label>
          <input
            type="number"
            step="0.000001"
            min="-90"
            max="90"
            required
            value={values.latitude}
            onChange={(e) => onChange('coordinates.latitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.latitude && (
            <p className="mt-1 text-sm text-red-600">{errors.latitude}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Longitude (-180 to 180)</label>
          <input
            type="number"
            step="0.000001"
            min="-180"
            max="180"
            required
            value={values.longitude}
            onChange={(e) => onChange('coordinates.longitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.longitude && (
            <p className="mt-1 text-sm text-red-600">{errors.longitude}</p>
          )}
        </div>
      </div>
    </div>
  );
}