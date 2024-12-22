import { v4 as uuidv4 } from 'uuid';
import type { Notification, NotificationPriority } from '../types/notification';
import type { DroneReport } from '../types/report';

class NotificationService {
  private static instance: NotificationService;
  private notifications: Notification[] = [];

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  createNotification(
    title: string,
    message: string,
    priority: NotificationPriority,
    reportId?: string
  ): Notification {
    const notification: Notification = {
      id: uuidv4(),
      title,
      message,
      priority,
      status: 'unread',
      timestamp: new Date().toISOString(),
      reportId,
    };

    this.notifications.unshift(notification);
    this.triggerNotification(notification);
    return notification;
  }

  private triggerNotification(notification: Notification) {
    // Check if browser supports notifications
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(notification.title, {
            body: notification.message,
            icon: '/notification-icon.png',
          });
        }
      });
    }
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => n.status === 'unread').length;
  }

  markAsRead(notificationId: string) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.status = 'read';
    }
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }

  createReportNotification(report: DroneReport) {
    this.createNotification(
      `New Report #${report.id}`,
      `A new drone incident has been reported at ${report.location.latitude}, ${report.location.longitude}`,
      'important',
      report.id
    );
  }

  createStatusUpdateNotification(reportId: string, newStatus: string) {
    this.createNotification(
      'Report Status Updated',
      `Report #${reportId} status has been updated to ${newStatus}`,
      'info',
      reportId
    );
  }
}

export const notificationService = NotificationService.getInstance();