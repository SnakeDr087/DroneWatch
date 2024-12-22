export interface Authority {
  id: string;
  name: string;
  type: 'local' | 'state' | 'federal';
  jurisdiction: {
    type: string;
    area: string[];
    coordinates?: [number, number][];
  };
  contact: {
    emergency: string;
    nonEmergency: string;
    email: string;
    website?: string;
  };
  reportingProtocol: {
    method: string;
    format: string;
    apiEndpoint?: string;
  };
}