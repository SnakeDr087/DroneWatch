import { DroneReport } from './report';

export type NotificationPriority = 'urgent' | 'important' | 'info';
export type NotificationStatus = 'unread' | 'read' | 'archived';

export interface Notification {
  id: string;
  title: string;
  message: string;
  priority: NotificationPriority;
  status: NotificationStatus;
  timestamp: string;
  reportId?: string;
  actionType?: 'view' | 'update' | 'review';
  actionUrl?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  reportId?: string;
  description?: string;
  location?: string;
  severity?: 'high' | 'medium' | 'low';
  reminder?: boolean;
}