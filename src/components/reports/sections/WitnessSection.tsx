import React from 'react';
import { User } from 'lucide-react';
import type { DroneReport } from '../../../types/report';

interface WitnessSectionProps {
  witness: DroneReport['witness'];
}

export function WitnessSection({ witness }: WitnessSectionProps) {
  return (
    <section className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <User className="h-5 w-5" />
        Witness Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-700">Name</p>
          <p className="text-sm text-gray-600">{witness.name}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Phone</p>
          <p className="text-sm text-gray-600">{witness.phone}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm font-medium text-gray-700">Email</p>
          <p className="text-sm text-gray-600">{witness.email}</p>
        </div>
      </div>
    </section>
  );
}