import { DroneReport } from '../../types/report';

export const validateWitnessInfo = (witness?: Partial<DroneReport['witness']>): string[] => {
  const errors: string[] = [];
  
  if (!witness?.name?.trim()) {
    errors.push('Witness name is required');
  }
  
  if (!witness?.phone?.trim()) {
    errors.push('Witness phone number is required');
  }
  
  if (!witness?.email?.trim()) {
    errors.push('Witness email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(witness.email)) {
    errors.push('Invalid email format');
  }
  
  return errors;
};

export const validateLocation = (location?: Partial<DroneReport['location']>): string[] => {
  const errors: string[] = [];
  
  if (!location?.latitude || !location?.longitude) {
    errors.push('Location coordinates are required');
  }
  
  return errors;
};

export const validateDroneDetails = (
  characteristics?: Partial<DroneReport['droneCharacteristics']>,
  behavior?: Partial<DroneReport['behavior']>
): string[] => {
  const errors: string[] = [];
  
  if (!behavior?.description?.trim()) {
    errors.push('Drone behavior description is required');
  }
  
  return errors;
};

export const validateReport = (report: Partial<DroneReport>): string[] => {
  return [
    ...validateWitnessInfo(report.witness),
    ...validateLocation(report.location),
    ...validateDroneDetails(report.droneCharacteristics, report.behavior)
  ];
};