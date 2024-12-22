import React, { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { ProfileSection } from './ProfileSection';
import { NotificationSettings } from './NotificationSettings';
import { SecuritySettings } from './SecuritySettings';

export function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, New York, NY 10001',
  });

  const [notificationSettings, setNotificationSettings] = useState([
    {
      id: 'new-reports',
      label: 'New Reports',
      description: 'Get notified when new drone incidents are reported in your area',
      email: true,
      sms: true,
      push: true,
    },
    {
      id: 'status-updates',
      label: 'Status Updates',
      description: 'Receive updates when the status of your reports changes',
      email: true,
      sms: false,
      push: true,
    },
    {
      id: 'authority-responses',
      label: 'Authority Responses',
      description: 'Get notified when authorities respond to your reports',
      email: true,
      sms: true,
      push: true,
    },
    {
      id: 'security-alerts',
      label: 'Security Alerts',
      description: 'Important security notifications about your account',
      email: true,
      sms: true,
      push: true,
    }
  ]);

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationUpdate = (id: string, channel: 'email' | 'sms' | 'push', value: boolean) => {
    setNotificationSettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, [channel]: value } : setting
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <SettingsIcon className="h-6 w-6 text-yellow-500" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6">
        <ProfileSection 
          profile={profile}
          onUpdate={handleProfileUpdate}
        />

        <NotificationSettings
          settings={notificationSettings}
          onUpdate={handleNotificationUpdate}
        />

        <SecuritySettings />
      </div>
    </div>
  );
}