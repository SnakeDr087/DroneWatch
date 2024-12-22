import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import { NotificationBadge } from '../notifications/NotificationBadge';
import { NotificationList } from '../notifications/NotificationList';
import { ProfileDropdown } from '../profile/ProfileDropdown';
import { notificationService } from '../../services/notificationService';

export function TopBar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationService.getNotifications());

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setNotifications(notificationService.getNotifications());
    }
  };

  return (
    <header className="bg-white shadow h-16">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-2xl font-semibold text-gray-800">Drone Incident Reporting</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={handleNotificationClick}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <NotificationBadge />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96">
                <NotificationList
                  notifications={notifications}
                  onNotificationClick={(notification) => {
                    notificationService.markAsRead(notification.id);
                    setNotifications(notificationService.getNotifications());
                  }}
                />
              </div>
            )}
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}