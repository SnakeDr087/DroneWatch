import React from 'react';
import { AlertTriangle, Info, Bell } from 'lucide-react';
import type { Notification } from '../../types/notification';

interface NotificationListProps {
  notifications: Notification[];
  onNotificationClick: (notification: Notification) => void;
}

export function NotificationList({ notifications, onNotificationClick }: NotificationListProps) {
  const getPriorityIcon = (priority: Notification['priority']) => {
    switch (priority) {
      case 'urgent':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'important':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
      {notifications.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No notifications
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                notification.status === 'unread' ? 'bg-blue-50' : ''
              }`}
              onClick={() => onNotificationClick(notification)}
            >
              <div className="flex items-start space-x-3">
                {getPriorityIcon(notification.priority)}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-500">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}