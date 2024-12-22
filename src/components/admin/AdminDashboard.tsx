import React from 'react';
import { Shield } from 'lucide-react';
import { RegistrationTable } from './RegistrationTable';
import { AdminStats } from './AdminStats';
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export function AdminDashboard() {
  const { user } = useAuth();

  // Redirect if not super admin
  if (!user?.isSuperAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-yellow-500" />
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <AdminStats />
      <RegistrationTable />
    </div>
  );
}