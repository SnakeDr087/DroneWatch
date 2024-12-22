import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ImpactSectionProps {
  localImpact?: string;
  similarIncidents?: string;
  immediateActions?: string[];
}

export function ImpactSection({ 
  localImpact, 
  similarIncidents, 
  immediateActions 
}: ImpactSectionProps) {
  if (!localImpact && !similarIncidents && !immediateActions?.length) {
    return null;
  }

  return (
    <section className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        Impact Assessment
      </h3>
      
      <div className="space-y-4">
        {localImpact && (
          <div>
            <p className="text-sm font-medium text-gray-700">Local Impact</p>
            <p className="text-sm text-gray-600">{localImpact}</p>
          </div>
        )}

        {similarIncidents && (
          <div>
            <p className="text-sm font-medium text-gray-700">Similar Incidents</p>
            <p className="text-sm text-gray-600">{similarIncidents}</p>
          </div>
        )}

        {immediateActions && immediateActions.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-700">Actions Taken</p>
            <ul className="mt-2 space-y-1">
              {immediateActions.map((action, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {action}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}