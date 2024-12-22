import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMapStore } from '../../../services/mapStore';

export function useAddSightingForm() {
  const addSighting = useMapStore((state) => state.addSighting);
  const [formData, setFormData] = useState({
    coordinates: {
      latitude: '',
      longitude: ''
    },
    address: {
      street: '',
      unit: '',
      city: '',
      state: '',
      zipCode: ''
    },
    drone: {
      type: '',
      category: 'civilian',
      emergencyStatus: 'routine',
      dateTime: new Date().toISOString().slice(0, 16), // Current date/time as default
      altitude: ''
    },
    description: ''
  });

  const handleChange = (field: string, value: string) => {
    const [section, key] = field.split('.');
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const sighting = {
      id: uuidv4(),
      dateTime: formData.drone.dateTime,
      location: {
        latitude: parseFloat(formData.coordinates.latitude),
        longitude: parseFloat(formData.coordinates.longitude),
        address: {
          street: formData.address.street,
          unit: formData.address.unit,
          city: formData.address.city,
          state: formData.address.state,
          zipCode: formData.address.zipCode
        }
      },
      droneCharacteristics: {
        type: formData.drone.type,
        estimatedAltitude: formData.drone.altitude
      },
      behavior: {
        description: formData.description
      },
      category: formData.drone.category,
      status: 'submitted',
      emergencyStatus: formData.drone.emergencyStatus,
      witness: {
        name: 'Admin User',
        phone: '555-0123',
        email: 'admin@example.com'
      },
      evidence: []
    };

    addSighting(sighting);
    
    // Reset form
    setFormData({
      coordinates: { latitude: '', longitude: '' },
      address: { street: '', unit: '', city: '', state: '', zipCode: '' },
      drone: {
        type: '',
        category: 'civilian',
        emergencyStatus: 'routine',
        dateTime: new Date().toISOString().slice(0, 16),
        altitude: ''
      },
      description: ''
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}