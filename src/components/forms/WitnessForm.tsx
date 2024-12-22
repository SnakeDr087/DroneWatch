import React from 'react';
import { UserCircle } from 'lucide-react';
import type { Witness } from '../../types/report';

interface WitnessFormProps {
  witness: Partial<Witness>;
  onUpdate: (field: string, value: string) => void;
}

export default function WitnessForm({ witness, onUpdate }: WitnessFormProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <UserCircle className="h-5 w-5" />
        Witness Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            value={witness.name || ''}
            onChange={(e) => onUpdate('name', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            value={witness.phone || ''}
            onChange={(e) => onUpdate('phone', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="(555) 555-5555"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input
            type="email"
            value={witness.email || ''}
            onChange={(e) => onUpdate('email', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={witness.address || ''}
            onChange={(e) => onUpdate('address', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="123 Main St, City, State, ZIP"
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-500">* Required fields</p>
    </section>
  );
}