import { DroneReport } from '../types/report';

class MapService {
  private static instance: MapService;

  private constructor() {}

  static getInstance(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }
    return MapService.instance;
  }

  getMapCenter(reports: DroneReport[]): [number, number] {
    if (reports.length === 0) {
      return [40.7128, -74.0060]; // Default to NYC
    }

    const latitudes = reports.map(r => r.location.latitude);
    const longitudes = reports.map(r => r.location.longitude);

    return [
      latitudes.reduce((a, b) => a + b) / latitudes.length,
      longitudes.reduce((a, b) => a + b) / longitudes.length
    ];
  }

  calculateBounds(reports: DroneReport[]): [[number, number], [number, number]] {
    if (reports.length === 0) {
      return [[40.7128, -74.0060], [40.7128, -74.0060]];
    }

    const latitudes = reports.map(r => r.location.latitude);
    const longitudes = reports.map(r => r.location.longitude);

    return [
      [Math.min(...latitudes), Math.min(...longitudes)],
      [Math.max(...latitudes), Math.max(...longitudes)]
    ];
  }
}

export const mapService = MapService.getInstance();