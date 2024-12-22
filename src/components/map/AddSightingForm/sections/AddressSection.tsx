import React from 'react';
import { Home } from 'lucide-react';

interface AddressSectionProps {
  address: {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  onChange: (field: string, value: string) => void;
}

export function AddressSection({ address, onChange }: AddressSectionProps) {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
        <Home className="h-4 w-4" />
        Physical Address
      </h3>

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
            {/* Add more states as needed */}
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
    </section>
  );
}