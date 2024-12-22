import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="mt-12 inline-flex items-center gap-2 text-yellow-400 bg-yellow-400/10 px-6 py-3 rounded-full">
      <AlertTriangle className="h-6 w-6" />
      <span className="text-lg">For emergencies, call 911 immediately</span>
    </div>
  );
}