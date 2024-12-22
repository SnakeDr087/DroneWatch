import { v4 as uuidv4 } from 'uuid';
import type { DroneReport } from '../../../types/report';
import type { NewsFilters } from '../types';

class SightingsService {
  private static instance: SightingsService;
  private sightings: DroneReport[] = [];

  private constructor() {
    // Initialize with sample data
    this.sightings = Array.from({ length: 50 }, (_, i) => ({
      id: uuidv4(),
      dateTime: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
      location: {
        latitude: 40.0583 + (Math.random() - 0.5) * 2,
        longitude: -74.4057 + (Math.random() - 0.5) * 2
      },
      state: 'NJ',
      category: ['civilian', 'military', 'unidentified'][Math.floor(Math.random() * 3)],
      status: 'completed',
      emergencyStatus: 'routine',
      witness: {
        name: 'Sample Witness',
        phone: '555-0123',
        email: 'witness@example.com'
      },
      droneCharacteristics: {},
      behavior: { description: 'Sample behavior' },
      evidence: []
    }));
  }

  static getInstance(): SightingsService {
    if (!SightingsService.instance) {
      SightingsService.instance = new SightingsService();
    }
    return SightingsService.instance;
  }

  async getSightings(filters: NewsFilters): Promise<DroneReport[]> {
    // In a real app, this would make API calls to fetch sightings
    return this.sightings.filter(sighting => {
      if (filters.region !== 'all' && sighting.state.toLowerCase() !== filters.region) {
        return false;
      }
      // Add more filtering logic based on filters
      return true;
    });
  }
}

export const sightingsService = SightingsService.getInstance();