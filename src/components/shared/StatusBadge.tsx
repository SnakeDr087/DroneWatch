import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`
      px-3 py-1 rounded-full text-sm font-medium
      ${getStatusColor(status)}
    `}>
      Status: {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}