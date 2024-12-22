import React from 'react';

interface EmergencyBadgeProps {
  status: string;
}

export function EmergencyBadge({ status }: EmergencyBadgeProps) {
  const getEmergencyColor = (status: string) => {
    switch (status) {
      case 'emergency':
        return 'bg-red-100 text-red-800';
      case 'urgent':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <span className={`
      px-3 py-1 rounded-full text-sm font-medium
      ${getEmergencyColor(status)}
    `}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}