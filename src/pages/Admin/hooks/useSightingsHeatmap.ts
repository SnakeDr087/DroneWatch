import { useMemo } from 'react';
import type { HeatmapData } from '../types';

export function useSightingsHeatmap() {
  return useMemo(() => {
    // In a real app, this would fetch data from an API
    const data: HeatmapData = {
      '0': { 1: 5, 2: 3, 15: 8 }, // January
      '1': { 5: 2, 10: 6, 20: 4 }, // February
      // ... more months
    };

    const maxValue = Math.max(
      ...Object.values(data).flatMap(month => 
        Object.values(month)
      )
    );

    return { heatmapData: data, maxValue };
  }, []);
}