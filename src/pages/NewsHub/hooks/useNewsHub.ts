import { useState, useEffect, useCallback } from 'react';
import { newsService } from '../services/newsService';
import { sightingsService } from '../services/sightingsService';
import type { DroneReport } from '../../../types/report';
import type { NewsItem, NewsFilters } from '../types';

export function useNewsHub() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [sightings, setSightings] = useState<DroneReport[]>([]);
  const [filters, setFilters] = useState<NewsFilters>({
    region: 'nj',
    timePeriod: '30d',
    sources: ['news', 'academic', 'government'],
    credibilityThreshold: 70
  });

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [newsData, sightingsData] = await Promise.all([
        newsService.getNews(filters),
        sightingsService.getSightings(filters)
      ]);
      setNews(newsData);
      setSightings(sightingsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateNews = async () => {
    setIsLoading(true);
    try {
      const newsData = await newsService.getNews(filters);
      setNews(newsData);
    } catch (error) {
      console.error('Error updating news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    news,
    sightings,
    filters,
    isLoading,
    updateNews,
    setFilters
  };
}