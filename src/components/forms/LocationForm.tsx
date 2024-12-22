import React from 'react';
import { MapPin } from 'lucide-react';
import { getCurrentPosition, formatCoordinates } from '../../utils/geolocation';

interface LocationFormProps {
  onLocationUpdate: (lat: number, lng: number) => void;
  location: { lat: number; lng: number } | null;
}

export default function LocationForm({ onLocationUpdate, location }: LocationFormProps) {
  const handleGetLocation = async () => {
    try {
      const position = await getCurrentPosition();
      onLocationUpdate(position.coords.latitude, position.coords.longitude);
    } catch (error) {
      console.error('Error getting location:', error);
      alert('Unable to get your location. Please enter it manually.');
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <MapPin className="h-5 w-5" />
        Location Information
      </h2>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleGetLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Get Current Location
        </button>
        {location && (
          <p className="text-sm text-gray-600">
            {formatCoordinates(location.lat, location.lng)}
          </p>
        )}
      </div>
    </section>
  );
}