import React from 'react';
import { Cloud } from 'lucide-react';
import type { WeatherConditions } from '../../types/report';

interface WeatherFormProps {
  weather: Partial<WeatherConditions>;
  onUpdate: (field: string, value: string) => void;
}

export default function WeatherForm({ weather, onUpdate }: WeatherFormProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Cloud className="h-5 w-5" />
        Weather Conditions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Weather Conditions</label>
          <select
            value={weather.conditions || ''}
            onChange={(e) => onUpdate('conditions', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select conditions...</option>
            <option value="clear">Clear</option>
            <option value="cloudy">Cloudy</option>
            <option value="rain">Rain</option>
            <option value="snow">Snow</option>
            <option value="fog">Fog</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Visibility</label>
          <select
            value={weather.visibility || ''}
            onChange={(e) => onUpdate('visibility', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select visibility...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wind Speed (mph)</label>
          <input
            type="number"
            value={weather.windSpeed || ''}
            onChange={(e) => onUpdate('windSpeed', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Temperature (°F)</label>
          <input
            type="number"
            value={weather.temperature || ''}
            onChange={(e) => onUpdate('temperature', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 72"
          />
        </div>
      </div>
    </section>
  );
}