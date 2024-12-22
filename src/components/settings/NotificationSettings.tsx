import React from 'react';
import { Bell, Mail, Phone, Shield } from 'lucide-react';

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  email: boolean;
  sms: boolean;
  push: boolean;
}

interface NotificationSettingsProps {
  settings: NotificationSetting[];
  onUpdate: (id: string, channel: 'email' | 'sms' | 'push', value: boolean) => void;
}

export function NotificationSettings({ settings, onUpdate }: NotificationSettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Bell className="h-5 w-5" />
        Notification Preferences
      </h2>

      <div className="space-y-6">
        {settings.map((setting) => (
          <div key={setting.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{setting.label}</h3>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.email}
                    onChange={(e) => onUpdate(setting.id, 'email', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Mail className="h-4 w-4 text-gray-400" />
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.sms}
                    onChange={(e) => onUpdate(setting.id, 'sms', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Phone className="h-4 w-4 text-gray-400" />
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.push}
                    onChange={(e) => onUpdate(setting.id, 'push', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Bell className="h-4 w-4 text-gray-400" />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}