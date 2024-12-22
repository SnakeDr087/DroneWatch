import React from 'react';
import { AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react';

export function StatsOverview() {
  const stats = [
    {
      label: 'Active Reports',
      value: '12',
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      change: '+2 from last week',
      changeType: 'increase'
    },
    {
      label: 'Urgent Cases',
      value: '3',
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      change: '+1 from last week',
      changeType: 'increase'
    },
    {
      label: 'Resolved',
      value: '45',
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      change: '+5 from last week',
      changeType: 'increase'
    },
    {
      label: 'Dismissed',
      value: '8',
      icon: <XCircle className="h-6 w-6 text-gray-500" />,
      change: 'No change',
      changeType: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <div>{stat.icon}</div>
          </div>
          <div className="mt-4">
            <span className={`text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' :
              stat.changeType === 'decrease' ? 'text-red-600' :
              'text-gray-600'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}