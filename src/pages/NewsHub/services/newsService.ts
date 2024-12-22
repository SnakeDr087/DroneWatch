import { v4 as uuidv4 } from 'uuid';
import type { NewsItem, NewsFilters } from '../types';

class NewsService {
  private static instance: NewsService;
  private news: NewsItem[] = [
    {
      id: uuidv4(),
      headline: "FAA Releases 2024 Implementation Plan for BVLOS Operations",
      source: "Federal Aviation Administration",
      date: new Date().toISOString(),
      summary: "The FAA has published its implementation plan for expanding Beyond Visual Line of Sight operations, outlining key milestones and regulatory updates for 2024-2025.",
      credibilityScore: 95,
      sourceUrl: "https://www.faa.gov/uas/advanced_operations",
      isBookmarked: false,
      category: "Government"
    },
    {
      id: uuidv4(),
      headline: "Drone Advisory Committee Recommendations for UTM",
      source: "Federal Aviation Administration",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      summary: "The DAC has released new recommendations for implementing the Unmanned Aircraft System Traffic Management (UTM) system nationwide.",
      credibilityScore: 90,
      sourceUrl: "https://www.faa.gov/uas/programs_partnerships/drone_advisory_committee",
      isBookmarked: false,
      category: "Government"
    },
    {
      id: uuidv4(),
      headline: "UAS Integration Pilot Program Results Published",
      source: "NASA UAS Integration in the NAS",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      summary: "NASA has published comprehensive results from its UAS Integration Pilot Program, demonstrating successful integration strategies for urban environments.",
      credibilityScore: 94,
      sourceUrl: "https://www.nasa.gov/centers/armstrong/features/index.html",
      isBookmarked: false,
      category: "Research"
    },
    {
      id: uuidv4(),
      headline: "ASTM International Updates Drone Safety Standards",
      source: "ASTM International",
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      summary: "New safety standards for commercial drone operations have been published, focusing on autonomous systems and remote ID implementation.",
      credibilityScore: 92,
      sourceUrl: "https://www.astm.org/standards/uas",
      isBookmarked: false,
      category: "Standards"
    },
    {
      id: uuidv4(),
      headline: "Commercial Drone Alliance Releases Policy Framework",
      source: "Commercial Drone Alliance",
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      summary: "The CDA has published a comprehensive policy framework for advancing commercial drone operations in the United States.",
      credibilityScore: 93,
      sourceUrl: "https://www.commercialdronealliance.org",
      isBookmarked: false,
      category: "Industry"
    }
  ];

  // Rest of the class implementation remains the same
  private constructor() {}

  static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }

  async getNews(filters: NewsFilters): Promise<NewsItem[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return this.news.filter(item => {
      if (item.credibilityScore < filters.credibilityThreshold) return false;
      if (filters.sources.length > 0 && !filters.sources.includes(item.category?.toLowerCase() || '')) return false;
      
      const itemDate = new Date(item.date);
      const now = new Date();
      const daysDiff = (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24);
      
      switch (filters.timePeriod) {
        case '24h':
          return daysDiff <= 1;
        case '7d':
          return daysDiff <= 7;
        case '30d':
          return daysDiff <= 30;
        default:
          return true;
      }
    });
  }
}

export const newsService = NewsService.getInstance();