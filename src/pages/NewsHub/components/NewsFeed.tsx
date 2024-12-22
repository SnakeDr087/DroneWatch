import React from 'react';
import { RefreshCw, Bookmark, ExternalLink } from 'lucide-react';
import type { NewsItem } from '../types';
import { CredibilityBadge } from './CredibilityBadge';

interface NewsFeedProps {
  news: NewsItem[];
  isLoading: boolean;
  onUpdate: () => Promise<void>;
}

export function NewsFeed({ news, isLoading, onUpdate }: NewsFeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Latest Updates</h2>
        <button
          onClick={onUpdate}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Updating...' : 'Update Feed'}
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {news.map((item) => (
          <article key={item.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">{item.headline}</h3>
              <CredibilityBadge score={item.credibilityScore} />
            </div>
            <p className="text-gray-600 mb-3">{item.summary}</p>
            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-500">
                {new Date(item.date).toLocaleDateString()} • {item.source}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Read More
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}