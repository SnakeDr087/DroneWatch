import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Filter } from 'lucide-react';
import { useMapStore } from '../../services/mapStore';
import { MapFilters } from './MapFilters';
import { DateRangeFilter } from './DateRangeFilter';
import { MapMarkers } from './MapMarkers';
import { filterReportsByDateRange } from '../../utils/dateFilters';
import 'leaflet/dist/leaflet.css';

const DEFAULT_CENTER: [number, number] = [40.7128, -74.0060]; // New York City
const DEFAULT_ZOOM = 12;

export function MapView() {
  const sightings = useMapStore((state) => state.sightings);
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  // Calculate map center based on reports or use default
  const mapCenter = sightings.length > 0
    ? [sightings[0].location.latitude, sightings[0].location.longitude] as [number, number]
    : DEFAULT_CENTER;

  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="absolute top-4 right-4 z-[1000] space-y-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50"
        >
          <Filter className="h-6 w-6" />
        </button>

        {showFilters && (
          <div className="w-80">
            <DateRangeFilter
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onStartDateChange={(date) => setDateRange(prev => ({ ...prev, startDate: date }))}
              onEndDateChange={(date) => setDateRange(prev => ({ ...prev, endDate: date }))}
              onFilter={() => filterReportsByDateRange(sightings, dateRange.startDate, dateRange.endDate)}
            />
            <MapFilters
              onClose={() => setShowFilters(false)}
            />
          </div>
        )}
      </div>

      <MapContainer
        center={mapCenter}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        style={{ background: '#f8f9fa' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapMarkers reports={sightings} />
      </MapContainer>
    </div>
  );
}