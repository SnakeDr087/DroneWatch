// Update the DroneReport type to include behavior
export interface DroneReport {
  id: string;
  dateTime: string;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  behavior: {
    description?: string;
  };
  droneCharacteristics: {
    type?: string;
    color?: string;
    size?: string;
    estimatedAltitude?: string;
    estimatedSpeed?: string;
  };
  witness: {
    name: string;
    phone: string;
    email: string;
    address?: string;
  };
  evidence: Evidence[];
  localImpact?: string;
  immediateActions?: string[];
  similarIncidents?: string;
  status: 'draft' | 'submitted' | 'processing' | 'completed';
  emergencyStatus: 'emergency' | 'urgent' | 'routine';
}