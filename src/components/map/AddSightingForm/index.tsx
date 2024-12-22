import React from 'react';
import { MapPin } from 'lucide-react';
import { useAddSightingForm } from './useAddSightingForm';
import { LocationSection } from './sections/LocationSection';
import { AddressSection } from './sections/AddressSection';
import { DroneSection } from './sections/DroneSection';
import { DescriptionSection } from './sections/DescriptionSection';

export function AddSightingForm() {
  const { formData, handleSubmit, handleChange } = useAddSightingForm();

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Add New Sighting</h2>
      </div>

      <div className="space-y-6">
        <LocationSection 
          coordinates={formData.coordinates}
          onChange={handleChange}
        />

        <AddressSection 
          address={formData.address}
          onChange={handleChange}
        />

        <DroneSection 
          drone={formData.drone}
          onChange={handleChange}
        />

        <DescriptionSection 
          description={formData.description}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Sighting
          </button>
        </div>
      </div>
    </form>
  );
}