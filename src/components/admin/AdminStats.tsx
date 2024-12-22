import React from 'react';
import { Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useAdminStats } from '../../hooks/useAdminStats';

export function AdminStats() {
  const stats = useAdminStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          label: 'Total Users',
          value: stats.totalUsers,
          icon: <Users className="h-6 w-6 text-blue-500" />,
          change: '+2 from last week'
        },
        {
          label: 'Pending Approvals',
          value: stats.pendingApprovals,
          icon: <Clock className="h-6 w-6 text-yellow-500" />,
          change: '+3 new requests'
        },
        {
          label: 'Approved Users',
          value: stats.approvedUsers,
          icon: <CheckCircle className="h-6 w-6 text-green-500" />,
          change: '+5 this month'
        },
        {
          label: 'Denied Requests',
          value: stats.deniedRequests,
          icon: <XCircle className="h-6 w-6 text-red-500" />,
          change: '+1 this week'
        }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div>{stat.icon}</div>
          </div>
          <p className="mt-4 text-sm text-gray-600">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}