import React, { useState } from 'react';
import type { DroneReport } from '../../types/report';
import { CalendarEvent } from './CalendarEvent';
import { CalendarEventModal } from './CalendarEventModal';
import { ReportDisplay } from '../reports/ReportDisplay';

interface DayEventsProps {
  reports: DroneReport[];
}

export function DayEvents({ reports }: DayEventsProps) {
  const [selectedReport, setSelectedReport] = useState<DroneReport | null>(null);
  const [showFullReport, setShowFullReport] = useState(false);

  return (
    <div className="space-y-2">
      {reports.map((report) => (
        <CalendarEvent
          key={report.id}
          report={report}
          onClick={() => setSelectedReport(report)}
        />
      ))}

      {selectedReport && !showFullReport && (
        <CalendarEventModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
          onViewFullReport={() => setShowFullReport(true)}
        />
      )}

      {selectedReport && showFullReport && (
        <ReportDisplay
          report={selectedReport}
          onClose={() => {
            setShowFullReport(false);
            setSelectedReport(null);
          }}
        />
      )}
    </div>
  );
}