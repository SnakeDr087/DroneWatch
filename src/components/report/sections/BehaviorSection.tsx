import React from 'react';
import { Activity } from 'lucide-react';

interface BehaviorSectionProps {
  behavior: {
    pattern: string[];
    description: string;
    severity: string;
  };
  onChange: (field: string, value: string | string[]) => void;
  errors: Record<string, string>;
}

export function BehaviorSection({ behavior, onChange, errors }: BehaviorSectionProps) {
  const handlePatternChange = (pattern: string) => {
    const newPatterns = behavior.pattern.includes(pattern)
      ? behavior.pattern.filter(p => p !== pattern)
      : [...behavior.pattern, pattern];
    onChange('behavior.pattern', newPatterns);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Activity className="h-5 w-5" />
        Flight Behavior
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Observed Flight Patterns (select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Hovering',
              'Following',
              'Circling',
              'Erratic',
              'Straight Path',
              'Zig-zag',
              'Landing/Taking Off',
              'Photography',
              'Package Delivery'
            ].map(pattern => (
              <label key={pattern} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={behavior.pattern.includes(pattern)}
                  onChange={() => handlePatternChange(pattern)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{pattern}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Detailed Description *
          </label>
          <textarea
            required
            value={behavior.description}
            onChange={(e) => onChange('behavior.description', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe the drone's behavior in detail..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Severity Assessment *
          </label>
          <select
            required
            value={behavior.severity}
            onChange={(e) => onChange('behavior.severity', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select severity...</option>
            <option value="routine">Routine - No immediate concern</option>
            <option value="suspicious">Suspicious - Unusual behavior</option>
            <option value="urgent">Urgent - Potential risk</option>
            <option value="emergency">Emergency - Immediate threat</option>
          </select>
          {errors.severity && (
            <p className="mt-1 text-sm text-red-600">{errors.severity}</p>
          )}
        </div>
      </div>
    </section>
  );
}