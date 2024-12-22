import type { DroneReport } from '../../../types/report';

class MapService {
  private static instance: MapService;

  private constructor() {}

  static getInstance(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }
    return MapService.instance;
  }

  async clearAllMarkers(): Promise<void> {
    // In a real app, this would make API calls to clear markers
    console.log('Clearing all markers');
  }

  async addSighting(data: Partial<DroneReport>): Promise<void> {
    // In a real app, this would make API calls to add a sighting
    console.log('Adding sighting:', data);
  }
}

export const mapService = MapService.getInstance();