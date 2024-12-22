import React from 'react';

interface AddressFieldsProps {
  values: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function AddressFields({ values, onChange, errors }: AddressFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">Address Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700">Street Address</label>
          <input
            type="text"
            value={values.street}
            onChange={(e) => onChange('street', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.street && (
            <p className="mt-1 text-sm text-red-600">{errors.street}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">City/Town</label>
          <input
            type="text"
            value={values.city}
            onChange={(e) => onChange('city', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">State/Province</label>
          <input
            type="text"
            value={values.state}
            onChange={(e) => onChange('state', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Postal Code</label>
          <input
            type="text"
            value={values.postalCode}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
          )}
        </div>
      </div>
    </div>
  );
}