import React from 'react';
import { Plane } from 'lucide-react';

interface DroneDetailsSectionProps {
  details: {
    type: string;
    size: string;
    color: string;
    altitude: string;
    speed: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function DroneDetailsSection({ details, onChange, errors }: DroneDetailsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Plane className="h-5 w-5" />
        Drone Characteristics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Drone Type
          </label>
          <select
            value={details.type}
            onChange={(e) => onChange('details.type', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Unknown/Not Sure</option>
            <option value="quadcopter">Quadcopter</option>
            <option value="fixed-wing">Fixed-wing</option>
            <option value="hexacopter">Hexacopter</option>
            <option value="octocopter">Octocopter</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estimated Size
          </label>
          <select
            value={details.size}
            onChange={(e) => onChange('details.size', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Unknown/Not Sure</option>
            <option value="small">Small (under 1ft)</option>
            <option value="medium">Medium (1-3ft)</option>
            <option value="large">Large (over 3ft)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Primary Color
          </label>
          <input
            type="text"
            value={details.color}
            onChange={(e) => onChange('details.color', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Black, White, Red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estimated Altitude *
          </label>
          <input
            type="number"
            required
            value={details.altitude}
            onChange={(e) => onChange('details.altitude', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Height in feet"
          />
          {errors.altitude && (
            <p className="mt-1 text-sm text-red-600">{errors.altitude}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estimated Speed
          </label>
          <input
            type="number"
            value={details.speed}
            onChange={(e) => onChange('details.speed', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Speed in mph"
          />
        </div>
      </div>
    </section>
  );
}