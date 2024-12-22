import React from 'react';
import { Clock, MapPin, AlertTriangle } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';

interface CalendarEventProps {
  report: DroneReport;
  onClick: () => void;
}

export function CalendarEvent({ report, onClick }: CalendarEventProps) {
  const getEventColor = () => {
    switch (report.emergencyStatus) {
      case 'emergency':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'urgent':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default:
        return 'bg-blue-100 border-blue-300 text-blue-800';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`p-2 rounded-lg border cursor-pointer hover:opacity-90 transition-opacity ${getEventColor()}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">
            Report #{report.id}
          </h4>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <Clock className="h-3 w-3" />
            <span>{formatDateTime(report.dateTime)}</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <MapPin className="h-3 w-3" />
            <span className="truncate">
              {report.location.latitude.toFixed(4)}°, {report.location.longitude.toFixed(4)}°
            </span>
          </div>
        </div>
        {report.emergencyStatus !== 'routine' && (
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
        )}
      </div>
    </div>
  );
}