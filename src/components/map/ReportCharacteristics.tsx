import React from 'react';
import type { DroneCharacteristics } from '../../types/report';

interface ReportCharacteristicsProps {
  characteristics: DroneCharacteristics;
}

export function ReportCharacteristics({ characteristics }: ReportCharacteristicsProps) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Drone Characteristics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Type</p>
          <p className="text-sm text-gray-600">{characteristics.type || 'Not specified'}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Color</p>
          <p className="text-sm text-gray-600">{characteristics.color || 'Not specified'}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Estimated Altitude</p>
          <p className="text-sm text-gray-600">{characteristics.estimatedAltitude || 'Not specified'}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Estimated Speed</p>
          <p className="text-sm text-gray-600">{characteristics.estimatedSpeed || 'Not specified'}</p>
        </div>
      </div>
    </div>
  );
}