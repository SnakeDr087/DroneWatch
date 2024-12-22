import React from 'react';
import { Shield } from 'lucide-react';

interface CredibilityBadgeProps {
  score: number;
}

export function CredibilityBadge({ score }: CredibilityBadgeProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getColor(score)}`}>
      <Shield className="h-3 w-3" />
      {score}%
    </span>
  );
}