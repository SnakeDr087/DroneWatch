import type { FormData } from '../hooks/useReportForm';

export const validateReport = (data: Partial<FormData>): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Validate location
  if (!data.location?.latitude || !data.location?.longitude) {
    errors.location = 'Location coordinates are required';
  } else {
    const lat = parseFloat(data.location.latitude);
    const lng = parseFloat(data.location.longitude);
    if (lat < -90 || lat > 90) errors.latitude = 'Invalid latitude';
    if (lng < -180 || lng > 180) errors.longitude = 'Invalid longitude';
  }

  // Validate timing
  if (!data.timing?.dateTime) {
    errors.dateTime = 'Date and time are required';
  }

  // Validate drone details
  if (!data.droneDetails?.altitude) {
    errors.altitude = 'Estimated altitude is required';
  }

  // Validate behavior
  if (!data.behavior?.description) {
    errors.description = 'Behavior description is required';
  }
  if (!data.behavior?.severity) {
    errors.severity = 'Severity assessment is required';
  }

  // Validate evidence
  if (data.evidence) {
    const maxSize = 50 * 1024 * 1024; // 50MB
    const invalidFiles = data.evidence.filter(file => file.size > maxSize);
    if (invalidFiles.length > 0) {
      errors.evidence = 'Some files exceed the 50MB size limit';
    }
  }

  return errors;
};