import React from 'react';
import { Newspaper, RefreshCw } from 'lucide-react';
import { ArticleList } from './ArticleList';
import { useArticleFeed } from '../../hooks/useArticleFeed';

export function ArticleFeed() {
  const { articles, isLoading, updateFeed } = useArticleFeed();

  const handleUpdate = async () => {
    try {
      await updateFeed();
    } catch (error) {
      console.error('Error updating feed:', error);
      // Show error notification
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-semibold">Latest Articles</h2>
        </div>
        <button
          onClick={handleUpdate}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Update Feed
        </button>
      </div>

      <ArticleList articles={articles.slice(0, 3)} />
      
      {articles.length > 3 && (
        <button
          className="mt-4 w-full py-2 text-blue-600 hover:text-blue-800 text-sm"
        >
          Load More Articles
        </button>
      )}
    </div>
  );
}