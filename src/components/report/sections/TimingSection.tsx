import React from 'react';
import { Clock } from 'lucide-react';

interface TimingSectionProps {
  timing: {
    dateTime: string;
    duration: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function TimingSection({ timing, onChange, errors }: TimingSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Clock className="h-5 w-5" />
        Timing Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date & Time of Sighting *
          </label>
          <input
            type="datetime-local"
            required
            value={timing.dateTime}
            onChange={(e) => onChange('timing.dateTime', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.dateTime && (
            <p className="mt-1 text-sm text-red-600">{errors.dateTime}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration of Observation
          </label>
          <select
            value={timing.duration}
            onChange={(e) => onChange('timing.duration', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select duration...</option>
            <option value="<1">Less than 1 minute</option>
            <option value="1-5">1-5 minutes</option>
            <option value="5-15">5-15 minutes</option>
            <option value="15-30">15-30 minutes</option>
            <option value="30+">More than 30 minutes</option>
          </select>
        </div>
      </div>
    </section>
  );
}