import { useCallback } from 'react';
import { mapService } from '../services/mapService';

export function useMapManagement() {
  const clearMarkers = useCallback(async () => {
    await mapService.clearAllMarkers();
  }, []);

  const addSighting = useCallback(async (data: any) => {
    await mapService.addSighting(data);
  }, []);

  return {
    clearMarkers,
    addSighting
  };
}