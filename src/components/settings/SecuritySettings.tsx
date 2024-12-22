import React from 'react';
import { Shield, Key, Smartphone, History } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Shield className="h-5 w-5" />
        Security Settings
      </h2>

      <div className="space-y-6">
        {/* Password Change Section */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-gray-400" />
              <h3 className="text-sm font-medium text-gray-900">Password</h3>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Change Password
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Last changed 30 days ago
          </p>
        </div>

        {/* Two-Factor Authentication */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-gray-400" />
              <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Enable
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Add an extra layer of security to your account
          </p>
        </div>

        {/* Login History */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-gray-400" />
            <h3 className="text-sm font-medium text-gray-900">Recent Login Activity</h3>
          </div>
          <div className="space-y-3">
            {[
              { device: 'Chrome on Windows', location: 'New York, US', time: '2 hours ago' },
              { device: 'Safari on iPhone', location: 'Boston, US', time: '1 day ago' },
              { device: 'Firefox on MacOS', location: 'Chicago, US', time: '3 days ago' }
            ].map((login, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-gray-900">{login.device}</p>
                  <p className="text-gray-500">{login.location}</p>
                </div>
                <span className="text-gray-500">{login.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}