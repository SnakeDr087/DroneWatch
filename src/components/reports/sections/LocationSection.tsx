import React from 'react';
import { MapPin } from 'lucide-react';
import type { DroneReport } from '../../../types/report';

interface LocationSectionProps {
  location: DroneReport['location'];
}

export function LocationSection({ location }: LocationSectionProps) {
  return (
    <section className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        Location Details
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Latitude</p>
          <p className="text-sm text-gray-600">{location.latitude.toFixed(6)}°</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Longitude</p>
          <p className="text-sm text-gray-600">{location.longitude.toFixed(6)}°</p>
        </div>
        {location.address && (
          <div className="col-span-2">
            <p className="text-sm font-medium text-gray-700">Address</p>
            <p className="text-sm text-gray-600">{location.address}</p>
          </div>
        )}
      </div>
    </section>
  );
}