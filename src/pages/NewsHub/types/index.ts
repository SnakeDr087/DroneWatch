export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  date: string;
  summary: string;
  credibilityScore: number;
  sourceUrl: string;
  isBookmarked: boolean;
  category?: string;
}

export interface NewsFilters {
  region: string;
  timePeriod: string;
  sources: string[];
  credibilityThreshold: number;
}