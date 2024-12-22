import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  category: string;
}

export function ResourceCard({ title, description, link, category }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Learn More
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}