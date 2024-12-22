import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../lib/supabase';
import { validateReport } from '../utils/validation';

interface FormData {
  id: string;
  location: {
    latitude: string;
    longitude: string;
  };
  timing: {
    dateTime: string;
    duration: string;
  };
  droneDetails: {
    type: string;
    size: string;
    color: string;
    altitude: string;
    speed: string;
  };
  behavior: {
    pattern: string[];
    description: string;
    severity: string;
  };
  evidence: File[];
}

export function useReportForm() {
  const [formData, setFormData] = useState<FormData>({
    id: uuidv4(),
    location: { latitude: '', longitude: '' },
    timing: { dateTime: '', duration: '' },
    droneDetails: { type: '', size: '', color: '', altitude: '', speed: '' },
    behavior: { pattern: [], description: '', severity: '' },
    evidence: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: string, value: string | string[]) => {
    const [section, key] = field.split('.');
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const handleEvidenceUpload = (files: FileList) => {
    setFormData(prev => ({
      ...prev,
      evidence: [...prev.evidence, ...Array.from(files)]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validationErrors = validateReport(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return false;
      }

      // Upload evidence files
      const evidenceUrls = await Promise.all(
        formData.evidence.map(async file => {
          const { data, error } = await supabase.storage
            .from('evidence')
            .upload(`${formData.id}/${file.name}`, file);
          
          if (error) throw error;
          return data.path;
        })
      );

      // Insert report data
      const { error: insertError } = await supabase
        .from('reports')
        .insert({
          id: formData.id,
          latitude: parseFloat(formData.location.latitude),
          longitude: parseFloat(formData.location.longitude),
          date_time: formData.timing.dateTime,
          duration: formData.timing.duration,
          drone_type: formData.droneDetails.type,
          drone_size: formData.droneDetails.size,
          drone_color: formData.droneDetails.color,
          altitude: formData.droneDetails.altitude,
          speed: formData.droneDetails.speed,
          behavior_pattern: formData.behavior.pattern,
          behavior_description: formData.behavior.description,
          severity: formData.behavior.severity,
          evidence_urls: evidenceUrls
        });

      if (insertError) throw insertError;
      return true;

    } catch (error) {
      console.error('Error submitting report:', error);
      setErrors({ submit: 'Failed to submit report. Please try again.' });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleFieldChange,
    handleEvidenceUpload,
    handleSubmit
  };
}