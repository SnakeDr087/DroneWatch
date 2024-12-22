import React from 'react';
import { Plane } from 'lucide-react';

interface DroneDetailsFormProps {
  characteristics: {
    type?: string;
    color?: string;
    size?: string;
    estimatedAltitude?: string;
    estimatedSpeed?: string;
  };
  behavior: {
    description?: string;
  };
  onUpdate: (field: string, value: string) => void;
}

export default function DroneDetailsForm({
  characteristics,
  behavior,
  onUpdate,
}: DroneDetailsFormProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Plane className="h-5 w-5" />
        Drone Details
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <input
            type="text"
            value={characteristics.type || ''}
            onChange={(e) => onUpdate('type', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Quadcopter, Fixed-wing"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            value={characteristics.color || ''}
            onChange={(e) => onUpdate('color', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Black, White, Red"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Describe the Activity of the UAS</label>
        <textarea
          value={behavior.description || ''}
          onChange={(e) => onUpdate('behavior.description', e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Describe the drone's activity, movement patterns, and behavior in detail..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Altitude</label>
          <input
            type="text"
            value={characteristics.estimatedAltitude || ''}
            onChange={(e) => onUpdate('estimatedAltitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 400 feet"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Speed</label>
          <input
            type="text"
            value={characteristics.estimatedSpeed || ''}
            onChange={(e) => onUpdate('estimatedSpeed', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 30 mph"
          />
        </div>
      </div>
    </section>
  );
}