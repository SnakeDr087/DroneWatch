import React from 'react';
import { Activity } from 'lucide-react';
import type { DroneReport } from '../../../types/report';

interface DailySummaryProps {
  sightings: DroneReport[];
}

export function DailySummary({ sightings }: DailySummaryProps) {
  const today = new Date().toISOString().split('T')[0];
  const todayCount = sightings.filter(s => 
    s.dateTime.startsWith(today)
  ).length;

  return (
    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
      <Activity className="h-5 w-5 text-blue-500" />
      <div>
        <span className="text-sm text-blue-700">Today's Sightings:</span>
        <span className="ml-2 font-semibold text-blue-900">{todayCount}</span>
      </div>
    </div>
  );
}