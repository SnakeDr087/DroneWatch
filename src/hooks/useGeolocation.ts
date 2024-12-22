import { useState } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export function useGeolocation() {
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = async (): Promise<Coordinates | null> => {
    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by your browser');
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
      });

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to get location';
      setError(message);
      console.error('Geolocation error:', err);
      return null;
    }
  };

  return {
    getCurrentLocation,
    error
  };
}