import React from 'react';
import { Plane } from 'lucide-react';
import type { DroneReport } from '../../../types/report';

interface DroneDetailsProps {
  characteristics: DroneReport['droneCharacteristics'];
  behavior: DroneReport['behavior'];
}

export function DroneDetails({ characteristics, behavior }: DroneDetailsProps) {
  return (
    <section className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Plane className="h-5 w-5" />
        Drone Characteristics
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(characteristics).map(([key, value]) => (
          value && (
            <div key={key}>
              <p className="text-sm font-medium text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </p>
              <p className="text-sm text-gray-600">{value}</p>
            </div>
          )
        ))}
      </div>

      {behavior.description && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Observed Behavior</h4>
          <p className="text-sm text-gray-600">{behavior.description}</p>
        </div>
      )}
    </section>
  );
}