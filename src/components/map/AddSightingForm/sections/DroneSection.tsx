import React from 'react';
import { Plane } from 'lucide-react';

interface DroneSectionProps {
  drone: {
    type: string;
    category: string;
    emergencyStatus: string;
    dateTime: string;
    altitude: string;
  };
  onChange: (field: string, value: string) => void;
}

export function DroneSection({ drone, onChange }: DroneSectionProps) {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
        <Plane className="h-4 w-4" />
        Drone Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            required
            value={drone.dateTime}
            onChange={(e) => onChange('drone.dateTime', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Drone Type</label>
          <input
            type="text"
            value={drone.type}
            onChange={(e) => onChange('drone.type', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Quadcopter, Fixed-wing"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={drone.category}
            onChange={(e) => onChange('drone.category', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="civilian">Civilian</option>
            <option value="military">Military/Government</option>
            <option value="unidentified">Unidentified</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Status</label>
          <select
            value={drone.emergencyStatus}
            onChange={(e) => onChange('drone.emergencyStatus', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="routine">Routine</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Altitude (ft)</label>
          <input
            type="number"
            value={drone.altitude}
            onChange={(e) => onChange('drone.altitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 400"
          />
        </div>
      </div>
    </section>
  );
}