import React, { ReactNode } from 'react';

interface RiskCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function RiskCard({ icon, title, description }: RiskCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}