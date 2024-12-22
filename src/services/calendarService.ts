import { v4 as uuidv4 } from 'uuid';
import type { CalendarEvent } from '../types/notification';
import type { DroneReport } from '../types/report';

class CalendarService {
  private static instance: CalendarService;
  private events: CalendarEvent[] = [];

  private constructor() {}

  static getInstance(): CalendarService {
    if (!CalendarService.instance) {
      CalendarService.instance = new CalendarService();
    }
    return CalendarService.instance;
  }

  createEventFromReport(report: DroneReport): CalendarEvent {
    const event: CalendarEvent = {
      id: uuidv4(),
      title: `Report #${report.id}: Drone Incident`,
      start: report.dateTime,
      end: report.dateTime,
      reportId: report.id,
      description: `Location: ${report.location.latitude}, ${report.location.longitude}`,
      location: `${report.location.latitude}, ${report.location.longitude}`,
      severity: report.emergencyStatus === 'emergency' ? 'high' : 
               report.emergencyStatus === 'urgent' ? 'medium' : 'low',
      reminder: true
    };

    this.events.push(event);
    return event;
  }

  getEvents(startDate: Date, endDate: Date): CalendarEvent[] {
    return this.events.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate >= startDate && eventDate <= endDate;
    });
  }

  getEventsByReportId(reportId: string): CalendarEvent[] {
    return this.events.filter(event => event.reportId === reportId);
  }

  updateEvent(eventId: string, updates: Partial<CalendarEvent>) {
    const eventIndex = this.events.findIndex(e => e.id === eventId);
    if (eventIndex !== -1) {
      this.events[eventIndex] = { ...this.events[eventIndex], ...updates };
    }
  }

  deleteEvent(eventId: string) {
    this.events = this.events.filter(e => e.id !== eventId);
  }
}

export const calendarService = CalendarService.getInstance();