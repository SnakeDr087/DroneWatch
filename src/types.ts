export interface DroneReport {
  dateTime: string;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  droneDetails: {
    type?: string;
    color?: string;
    size?: string;
    behavior: string;
    altitude?: string;
  };
  witness: {
    name: string;
    phone: string;
    email: string;
  };
  attachments: File[];
  description: string;
}

export interface Authority {
  name: string;
  type: 'local' | 'state' | 'federal';
  phone: string;
  email: string;
  jurisdiction: string;
}