import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { DroneReport } from '../types/report';

interface MapState {
  sightings: DroneReport[];
  addSighting: (sighting: DroneReport) => void;
  removeSighting: (id: string) => void;
  clearSightings: () => void;
  updateSightings: (sightings: DroneReport[]) => void;
}

export const useMapStore = create<MapState>()(
  persist(
    (set) => ({
      sightings: [],
      addSighting: (sighting) => 
        set((state) => ({ 
          sightings: [sighting, ...state.sightings] 
        })),
      removeSighting: (id) =>
        set((state) => ({
          sightings: state.sightings.filter(s => s.id !== id)
        })),
      clearSightings: () => set({ sightings: [] }),
      updateSightings: (sightings) => set({ sightings })
    }),
    {
      name: 'drone-sightings-storage'
    }
  )
);