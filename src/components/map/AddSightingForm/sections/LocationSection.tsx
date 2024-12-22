import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationSectionProps {
  coordinates: {
    latitude: string;
    longitude: string;
  };
  address: {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  onChange: (field: string, value: string) => void;
}

export function LocationSection({ coordinates, address, onChange }: LocationSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
          <MapPin className="h-4 w-4" />
          Location Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              type="number"
              step="any"
              required
              value={coordinates.latitude}
              onChange={(e) => onChange('coordinates.latitude', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              type="number"
              step="any"
              required
              value={coordinates.longitude}
              onChange={(e) => onChange('coordinates.longitude', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Physical Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Street Address</label>
            <input
              type="text"
              value={address.street}
              onChange={(e) => onChange('address.street', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="123 Main St"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Unit/Apt (Optional)</label>
            <input
              type="text"
              value={address.unit}
              onChange={(e) => onChange('address.unit', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Apt 4B"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={address.city}
              onChange={(e) => onChange('address.city', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Newark"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <select
              value={address.state}
              onChange={(e) => onChange('address.state', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select State</option>
              <option value="NJ">New Jersey</option>
              <option value="NY">New York</option>
              <option value="PA">Pennsylvania</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
            <input
              type="text"
              value={address.zipCode}
              onChange={(e) => onChange('address.zipCode', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="07102"
              pattern="[0-9]{5}"
            />
          </div>
        </div>
      </div>
    </section>
  );
}