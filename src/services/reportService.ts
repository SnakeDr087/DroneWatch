import { v4 as uuidv4 } from 'uuid';
import type { DroneReport } from '../types/report';

class ReportService {
  private static instance: ReportService;
  private reports: DroneReport[] = [];
  private storageKey = 'drone_reports';

  private constructor() {
    // Load reports from localStorage
    const savedReports = localStorage.getItem(this.storageKey);
    if (savedReports) {
      this.reports = JSON.parse(savedReports);
    } else {
      // Initialize with sample data if no saved reports exist
      this.reports = [
        {
          id: uuidv4(),
          dateTime: new Date(2024, 2, 15, 10, 30).toISOString(),
          location: {
            latitude: 40.7128,
            longitude: -74.0060
          },
          behavior: {
            description: "Hovering over residential area"
          },
          droneCharacteristics: {
            type: "Quadcopter",
            color: "Black",
            size: "Medium",
            estimatedAltitude: "200ft",
            estimatedSpeed: "15mph"
          },
          witness: {
            name: "John Doe",
            phone: "(555) 555-5555",
            email: "john@example.com"
          },
          evidence: [],
          status: 'processing',
          emergencyStatus: 'routine'
        },
        {
          id: uuidv4(),
          dateTime: new Date(2024, 2, 14, 15, 45).toISOString(),
          location: {
            latitude: 34.0522,
            longitude: -118.2437
          },
          behavior: {
            description: "Flying erratically near buildings"
          },
          droneCharacteristics: {
            type: "Fixed-wing",
            color: "White",
            size: "Large",
            estimatedAltitude: "300ft",
            estimatedSpeed: "25mph"
          },
          witness: {
            name: "Jane Smith",
            phone: "(555) 555-5556",
            email: "jane@example.com"
          },
          evidence: [],
          status: 'completed',
          emergencyStatus: 'urgent'
        }
      ];
      this.saveReports();
    }
  }

  private saveReports(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.reports));
  }

  static getInstance(): ReportService {
    if (!ReportService.instance) {
      ReportService.instance = new ReportService();
    }
    return ReportService.instance;
  }

  getReports(): DroneReport[] {
    return this.reports;
  }

  addReport(report: DroneReport): void {
    this.reports.unshift(report);
    this.saveReports();
  }

  updateReport(reportId: string, updates: Partial<DroneReport>): void {
    const index = this.reports.findIndex(r => r.id === reportId);
    if (index !== -1) {
      this.reports[index] = { ...this.reports[index], ...updates };
      this.saveReports();
    }
  }

  deleteReport(reportId: string): void {
    this.reports = this.reports.filter(r => r.id !== reportId);
    this.saveReports();
  }

  getReportsByDateRange(startDate: Date, endDate: Date): DroneReport[] {
    return this.reports.filter(report => {
      const reportDate = new Date(report.dateTime);
      return reportDate >= startDate && reportDate <= endDate;
    });
  }

  getReportById(reportId: string): DroneReport | undefined {
    return this.reports.find(r => r.id === reportId);
  }
}

export const reportService = ReportService.getInstance();