import React from 'react';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ActivitySummary() {
  const activity = {
    totalReports: 12,
    pendingReports: 2,
    completedReports: 8
  };

  return (
    <div className="p-4">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Activity Overview
      </h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-700">
            <Activity className="h-4 w-4 mr-2" />
            Total Reports
          </div>
          <span className="text-sm font-medium">{activity.totalReports}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-yellow-700">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Pending Review
          </div>
          <span className="text-sm font-medium">{activity.pendingReports}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Completed
          </div>
          <span className="text-sm font-medium">{activity.completedReports}</span>
        </div>
      </div>
      <Link
        to="/reports"
        className="mt-3 block text-sm text-blue-600 hover:text-blue-800"
      >
        View All Reports →
      </Link>
    </div>
  );
}