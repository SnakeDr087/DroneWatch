import React from 'react';
import { MapHeader } from './components/MapHeader';
import { SightingsChart } from './components/SightingsChart';
import { NewsFeed } from './components/NewsFeed';
import { FilterPanel } from './components/FilterPanel';
import { useNewsHub } from './hooks/useNewsHub';
import { EmailSubscription } from './components/EmailSubscription';

export function NewsHub() {
  const { 
    news,
    filters,
    isLoading,
    updateNews,
    setFilters
  } = useNewsHub();

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MapHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SightingsChart />
            <NewsFeed 
              news={news} 
              isLoading={isLoading}
              onUpdate={updateNews}
            />
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <FilterPanel 
              filters={filters}
              onChange={handleFilterChange}
              onSubscribe={(email) => console.log('Subscribe:', email)}
            />
            <EmailSubscription />
          </div>
        </div>
      </main>
    </div>
  );
}