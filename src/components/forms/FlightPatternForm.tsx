import React from 'react';
import { Plane } from 'lucide-react';
import type { FlightPattern } from '../../types/report';

interface FlightPatternFormProps {
  pattern: Partial<FlightPattern>;
  onUpdate: (field: string, value: string | string[]) => void;
}

export default function FlightPatternForm({ pattern, onUpdate }: FlightPatternFormProps) {
  const handleManeuverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maneuvers = e.target.checked
      ? [...(pattern.maneuvers || []), e.target.value]
      : (pattern.maneuvers || []).filter(m => m !== e.target.value);
    onUpdate('maneuvers', maneuvers);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Plane className="h-5 w-5" />
        Flight Pattern Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial Direction</label>
          <select
            value={pattern.initialDirection || ''}
            onChange={(e) => onUpdate('initialDirection', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select direction...</option>
            <option value="N">North</option>
            <option value="NE">Northeast</option>
            <option value="E">East</option>
            <option value="SE">Southeast</option>
            <option value="S">South</option>
            <option value="SW">Southwest</option>
            <option value="W">West</option>
            <option value="NW">Northwest</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Final Direction</label>
          <select
            value={pattern.finalDirection || ''}
            onChange={(e) => onUpdate('finalDirection', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select direction...</option>
            <option value="N">North</option>
            <option value="NE">Northeast</option>
            <option value="E">East</option>
            <option value="SE">Southeast</option>
            <option value="S">South</option>
            <option value="SW">Southwest</option>
            <option value="W">West</option>
            <option value="NW">Northwest</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Duration of Observation</label>
          <input
            type="text"
            value={pattern.duration || ''}
            onChange={(e) => onUpdate('duration', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 15 minutes"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Observed Maneuvers</label>
          <div className="space-y-2">
            {[
              'Hovering',
              'Circling',
              'Erratic Movement',
              'Following',
              'Rapid Acceleration',
              'Low Flying',
              'High Flying'
            ].map(maneuver => (
              <label key={maneuver} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={maneuver}
                  checked={(pattern.maneuvers || []).includes(maneuver)}
                  onChange={handleManeuverChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{maneuver}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}