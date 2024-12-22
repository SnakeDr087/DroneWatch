import React from 'react';
import { MapPin } from 'lucide-react';
import { SightingForm } from './SightingForm';
import { useMapManagement } from '../../hooks/useMapManagement';

export function MapManagement() {
  const { clearMarkers, addSighting } = useMapManagement();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-semibold">Map Management</h2>
        </div>
        <button
          onClick={clearMarkers}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          Clear All Markers
        </button>
      </div>

      <SightingForm onSubmit={addSighting} />
    </div>
  );
}