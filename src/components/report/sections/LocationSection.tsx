import React from 'react';
import { MapPin } from 'lucide-react';
import { useGeolocation } from '../../../hooks/useGeolocation';

interface LocationSectionProps {
  location: {
    latitude: string;
    longitude: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function LocationSection({ location, onChange, errors }: LocationSectionProps) {
  const { getCurrentLocation } = useGeolocation();

  const handleGetLocation = async () => {
    const coords = await getCurrentLocation();
    if (coords) {
      onChange('location.latitude', coords.latitude.toString());
      onChange('location.longitude', coords.longitude.toString());
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Location Details
        </h2>
        <button
          type="button"
          onClick={handleGetLocation}
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          Get Current Location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Latitude *
          </label>
          <input
            type="number"
            step="any"
            required
            value={location.latitude}
            onChange={(e) => onChange('location.latitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="-90 to 90"
          />
          {errors.latitude && (
            <p className="mt-1 text-sm text-red-600">{errors.latitude}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Longitude *
          </label>
          <input
            type="number"
            step="any"
            required
            value={location.longitude}
            onChange={(e) => onChange('location.longitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="-180 to 180"
          />
          {errors.longitude && (
            <p className="mt-1 text-sm text-red-600">{errors.longitude}</p>
          )}
        </div>
      </div>
    </section>
  );
}