export const formatCoordinates = (latitude: number, longitude: number): string => {
  return `${latitude.toFixed(6)}°${latitude >= 0 ? 'N' : 'S'}, ${longitude.toFixed(6)}°${longitude >= 0 ? 'E' : 'W'}`;
};

export const formatAddress = (address?: string): string => {
  if (!address) return 'No address provided';
  return address.trim();
};

export const formatDistance = (meters: number): string => {
  if (meters < 1000) {
    return `${meters.toFixed(0)} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
};