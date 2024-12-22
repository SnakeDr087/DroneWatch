import React from 'react';
import { Monitor, Smartphone, Clock } from 'lucide-react';

export function SessionInfo() {
  const sessions = [
    {
      device: 'Chrome - Windows 10',
      icon: <Monitor className="h-4 w-4" />,
      location: 'New York, US',
      lastActive: 'Current session'
    },
    {
      device: 'Safari - iPhone 12',
      icon: <Smartphone className="h-4 w-4" />,
      location: 'Boston, US',
      lastActive: '2 hours ago'
    }
  ];

  return (
    <div className="p-4">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Active Sessions
      </h3>
      <div className="space-y-3">
        {sessions.map((session, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="text-gray-400">{session.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{session.device}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{session.location}</span>
                <span className="mx-1">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{session.lastActive}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-3 text-sm text-red-600 hover:text-red-800"
        onClick={() => {/* Handle logout from all sessions */}}
      >
        Sign out of all sessions
      </button>
    </div>
  );
}