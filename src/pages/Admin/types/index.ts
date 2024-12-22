export interface HeatmapData {
  [month: string]: {
    [day: number]: number;
  };
}

export interface ArticleData {
  id: string;
  title: string;
  source: string;
  date: string;
  preview: string;
  url: string;
  isVerified: boolean;
}