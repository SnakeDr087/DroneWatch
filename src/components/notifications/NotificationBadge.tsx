import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { notificationService } from '../../services/notificationService';

export function NotificationBadge() {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setUnreadCount(notificationService.getUnreadCount());
    };

    updateCount();
    // Set up an interval to check for new notifications
    const interval = setInterval(updateCount, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Bell className="h-6 w-6 text-gray-600" />
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </div>
  );
}