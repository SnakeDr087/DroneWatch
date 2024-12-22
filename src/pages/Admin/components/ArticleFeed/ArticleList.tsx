import React from 'react';
import { ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import type { ArticleData } from '../../types';

interface ArticleListProps {
  articles: ArticleData[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="space-y-4">
      {articles.map(article => (
        <article key={article.id} className="border rounded-lg p-4 hover:bg-gray-50">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1">{article.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span>{article.source}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <span className={`flex items-center gap-1 ${
                  article.isVerified ? 'text-green-600' : 'text-red-600'
                }`}>
                  {article.isVerified ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  {article.isVerified ? 'Verified' : 'Unverified'}
                </span>
              </div>
              <p className="text-gray-600">{article.preview}</p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-500 hover:text-blue-600"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}