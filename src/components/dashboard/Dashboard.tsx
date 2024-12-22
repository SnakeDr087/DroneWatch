import React, { useState, useEffect } from 'react';
import { RecentReports } from './RecentReports';
import { StatsOverview } from './StatsOverview';
import { Calendar } from './Calendar';
import { ReportModal } from './ReportModal';
import { DayReportsModal } from './DayReportsModal';
import type { DroneReport } from '../../types/report';
import { reportService } from '../../services/reportService';

export function Dashboard() {
  const [selectedReport, setSelectedReport] = useState<DroneReport | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateReports, setDateReports] = useState<DroneReport[]>([]);
  const [reports, setReports] = useState<DroneReport[]>([]);
  
  useEffect(() => {
    setReports(reportService.getReports());
  }, []);

  const handleDateClick = (date: Date, reports: DroneReport[]) => {
    setSelectedDate(date);
    setDateReports(reports);
  };

  return (
    <div className="space-y-8">
      <StatsOverview reports={reports} />
      <RecentReports reports={reports} onReportClick={setSelectedReport} />
      <Calendar 
        reports={reports}
        onDateClick={handleDateClick}
      />
      
      {selectedReport && (
        <ReportModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}

      {selectedDate && (
        <DayReportsModal
          date={selectedDate}
          reports={dateReports}
          onClose={() => setSelectedDate(null)}
          onReportClick={setSelectedReport}
        />
      )}
    </div>
  );
}