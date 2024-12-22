import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import type { DroneReport, Evidence } from '../types/report';
import { validateReport } from '../utils/validation';
import { findRelevantAuthorities } from '../utils/authorities';
import LocationForm from './forms/LocationForm';
import DroneDetailsForm from './forms/DroneDetailsForm';
import WitnessForm from './forms/WitnessForm';
import EvidenceUploadForm from './forms/EvidenceUploadForm';
import { formatDateTime, generateEmailSubject } from '../utils/formatting';

export default function ReportForm() {
  const [report, setReport] = useState<Partial<DroneReport>>({
    id: uuidv4(),
    dateTime: new Date().toISOString(),
    status: 'draft',
    emergencyStatus: 'routine',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleLocationUpdate = (lat: number, lng: number) => {
    setReport((prev) => ({
      ...prev,
      location: { ...prev.location, latitude: lat, longitude: lng },
    }));
  };

  const handleDroneUpdate = (field: string, value: string) => {
    setReport((prev) => ({
      ...prev,
      droneCharacteristics: { ...prev.droneCharacteristics, [field]: value },
    }));
  };

  const handleWitnessUpdate = (field: string, value: string) => {
    setReport((prev) => ({
      ...prev,
      witness: { ...prev.witness, [field]: value },
    }));
  };

  const handleEvidenceAdd = (files: FileList) => {
    const newEvidence: Evidence[] = Array.from(files).map((file) => ({
      id: uuidv4(),
      type: file.type.startsWith('image/')
        ? 'image'
        : file.type.startsWith('video/')
        ? 'video'
        : 'audio',
      file,
      timestamp: new Date().toISOString(),
    }));

    setReport((prev) => ({
      ...prev,
      evidence: [...(prev.evidence || []), ...newEvidence],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      const validationErrors = validateReport(report);
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        setLoading(false);
        return;
      }

      const authorities = await findRelevantAuthorities(
        report.location!.latitude,
        report.location!.longitude
      );

      // Generate email subject
      const subject = generateEmailSubject(
        `${report.location!.latitude.toFixed(6)}, ${report.location!.longitude.toFixed(6)}`,
        report.dateTime
      );

      console.log('Submitting report:', {
        ...report,
        emailSubject: subject,
        authorities
      });

      alert('Report submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting report:', error);
      setErrors(['An error occurred while submitting the report']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Emergency Warning */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              If you believe there is immediate danger, please call 911 immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <ul className="list-disc list-inside text-sm text-red-700">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <LocationForm
        onLocationUpdate={handleLocationUpdate}
        location={
          report.location
            ? {
                lat: report.location.latitude,
                lng: report.location.longitude,
              }
            : null
        }
      />

      <WitnessForm
        witness={report.witness || {}}
        onUpdate={handleWitnessUpdate}
      />

      <DroneDetailsForm
        characteristics={report.droneCharacteristics || {}}
        behavior={report.flightBehavior || {}}
        onUpdate={handleDroneUpdate}
      />

      <EvidenceUploadForm
        evidence={report.evidence || []}
        onEvidenceAdd={handleEvidenceAdd}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Report'}
      </button>
    </form>
  );
}