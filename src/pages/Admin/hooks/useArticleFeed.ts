import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { ArticleData } from '../types';

export function useArticleFeed() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    // In a real app, this would fetch from an API
    const sampleArticles: ArticleData[] = [
      {
        id: uuidv4(),
        title: 'New Drone Regulations Coming to NJ',
        source: 'NJ.com',
        date: new Date().toISOString(),
        preview: 'State officials announce new guidelines for drone operations...',
        url: 'https://example.com/article1',
        isVerified: true
      },
      {
        id: uuidv4(),
        title: 'Drone Sightings Near Newark Airport',
        source: 'Aviation Weekly',
        date: new Date().toISOString(),
        preview: 'Multiple pilots report unauthorized drone activity...',
        url: 'https://example.com/article2',
        isVerified: false
      },
      {
        id: uuidv4(),
        title: 'Local Police Acquire Drone Detection System',
        source: 'Local News',
        date: new Date().toISOString(),
        preview: 'Law enforcement enhances capabilities to track unauthorized drones...',
        url: 'https://example.com/article3',
        isVerified: true
      }
    ];

    setArticles(sampleArticles);
  };

  const updateFeed = async () => {
    setIsLoading(true);
    try {
      await loadArticles();
    } finally {
      setIsLoading(false);
    }
  };

  return { articles, isLoading, updateFeed };
}