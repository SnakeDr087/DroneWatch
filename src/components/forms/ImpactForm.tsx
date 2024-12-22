import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ImpactFormProps {
  localImpact: string;
  similarIncidents: string;
  immediateActions: string[];
  onUpdate: (field: string, value: string | string[]) => void;
}

export default function ImpactForm({
  localImpact,
  similarIncidents,
  immediateActions,
  onUpdate
}: ImpactFormProps) {
  const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actions = e.target.checked
      ? [...immediateActions, e.target.value]
      : immediateActions.filter(a => a !== e.target.value);
    onUpdate('immediateActions', actions);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <AlertCircle className="h-5 w-5" />
        Impact Assessment
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Impact on Local Activities</label>
          <textarea
            value={localImpact}
            onChange={(e) => onUpdate('localImpact', e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe any disruption to local activities..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Similar Incidents</label>
          <textarea
            value={similarIncidents}
            onChange={(e) => onUpdate('similarIncidents', e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe any similar incidents in the area..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Immediate Actions Taken</label>
          <div className="space-y-2">
            {[
              'Called Emergency Services',
              'Contacted Local Police',
              'Notified Airport Authority',
              'Documented with Photos/Videos',
              'Alerted Nearby Residents',
              'Contacted Property Owner',
              'Other'
            ].map(action => (
              <label key={action} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={action}
                  checked={immediateActions.includes(action)}
                  onChange={handleActionChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{action}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}