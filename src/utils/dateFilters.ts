import { DroneReport } from '../types/report';

export const filterReportsByDateRange = (
  reports: DroneReport[],
  startDate: string,
  endDate: string
): DroneReport[] => {
  if (!startDate || !endDate) return reports;

  const start = new Date(startDate);
  const end = new Date(endDate);

  return reports.filter(report => {
    const reportDate = new Date(report.dateTime);
    return reportDate >= start && reportDate <= end;
  });
};