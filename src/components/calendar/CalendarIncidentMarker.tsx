import React from 'react';
import type { DroneReport } from '../../types/report';

interface CalendarIncidentMarkerProps {
  incident: DroneReport;
}

export function CalendarIncidentMarker({ incident }: CalendarIncidentMarkerProps) {
  const getMarkerColor = () => {
    switch (incident.emergencyStatus) {
      case 'emergency':
        return 'bg-red-500';
      case 'urgent':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`w-2 h-2 rounded-full ${getMarkerColor()}`} />
    </div>
  );
}