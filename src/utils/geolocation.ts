export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  });
};

export const formatCoordinates = (latitude: number, longitude: number): string => {
  return `${latitude.toFixed(6)}°${latitude >= 0 ? 'N' : 'S'}, ${longitude.toFixed(6)}°${longitude >= 0 ? 'E' : 'W'}`;
};