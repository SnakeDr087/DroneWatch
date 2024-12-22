import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Shield } from 'lucide-react';
import { useMapStore } from '../../../services/mapStore';
import { DailySummary } from './DailySummary';
import { AddSightingForm } from '../../../components/map/AddSightingForm';

export function MapHeader() {
  const sightings = useMapStore((state) => state.sightings);
  const center: [number, number] = [40.0583, -74.4057];
  
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold">NJ Drone Activity Tracker</h1>
          </div>
          <DailySummary sightings={sightings} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={center}
                zoom={8}
                className="h-full w-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {sightings.map(sighting => (
                  <Marker 
                    key={sighting.id}
                    position={[sighting.location.latitude, sighting.location.longitude]}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-medium">Sighting #{sighting.id}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(sighting.dateTime).toLocaleString()}
                        </p>
                        {sighting.behavior?.description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {sighting.behavior.description}
                          </p>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AddSightingForm />
          </div>
        </div>
      </div>
    </div>
  );
}