import { useState } from 'react';

export function useForm(onSubmit: (data: any) => void) {
  const [formData, setFormData] = useState({
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: ''
    },
    coordinates: {
      latitude: '',
      longitude: ''
    },
    details: {
      dateTime: '',
      duration: '',
      droneType: '',
      altitude: '',
      weather: '',
      witnesses: '',
      description: '',
      status: 'pending'
    }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (field: string, value: string) => {
    const [section, key] = field.includes('.') ? field.split('.') : [field, null];
    
    setFormData(prev => ({
      ...prev,
      [section]: key 
        ? { ...prev[section as keyof typeof prev], [key]: value }
        : value
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    if (!formData.coordinates.latitude) newErrors.latitude = 'Latitude is required';
    if (!formData.coordinates.longitude) newErrors.longitude = 'Longitude is required';
    if (!formData.details.dateTime) newErrors.dateTime = 'Date and time are required';
    if (!formData.details.description) newErrors.description = 'Description is required';

    // Coordinate range validation
    const lat = parseFloat(formData.coordinates.latitude);
    const lng = parseFloat(formData.coordinates.longitude);

    if (lat < -90 || lat > 90) newErrors.latitude = 'Invalid latitude range';
    if (lng < -180 || lng > 180) newErrors.longitude = 'Invalid longitude range';

    return newErrors;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }

    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        address: { street: '', city: '', state: '', postalCode: '' },
        coordinates: { latitude: '', longitude: '' },
        details: {
          dateTime: '',
          duration: '',
          droneType: '',
          altitude: '',
          weather: '',
          witnesses: '',
          description: '',
          status: 'pending'
        }
      });
      setShowConfirmation(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    formData,
    errors,
    showConfirmation,
    handleChange,
    handleSubmit,
    setShowConfirmation
  };
}