import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export function Card({ title, icon: Icon, children, className, footer }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className || ''}`}>
      {(title || Icon) && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
          </div>
        </div>
      )}
      
      <div className="p-6">{children}</div>
      
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
}