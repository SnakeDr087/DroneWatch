import { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';

export function useAdminStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    pendingApprovals: 0,
    approvedUsers: 0,
    deniedRequests: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      const data = await adminService.getStats();
      setStats(data);
    };

    loadStats();
    const interval = setInterval(loadStats, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return stats;
}