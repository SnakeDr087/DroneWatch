import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { LocationSection } from './sections/LocationSection';
import { TimingSection } from './sections/TimingSection';
import { DroneDetailsSection } from './sections/DroneDetailsSection';
import { BehaviorSection } from './sections/BehaviorSection';
import { EvidenceSection } from './sections/EvidenceSection';
import { useReportForm } from '../../hooks/useReportForm';
import { SubmissionModal } from './SubmissionModal';

export function IncidentReportForm() {
  const {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleFieldChange,
    handleEvidenceUpload
  } = useReportForm();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await handleSubmit()) {
      setShowModal(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Emergency Warning */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <div className="ml-3">
            <p className="text-sm text-red-700">
              For immediate threats or emergencies, please call 911 first.
            </p>
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <LocationSection
        location={formData.location}
        onChange={handleFieldChange}
        errors={errors}
      />

      <TimingSection
        timing={formData.timing}
        onChange={handleFieldChange}
        errors={errors}
      />

      <DroneDetailsSection
        details={formData.droneDetails}
        onChange={handleFieldChange}
        errors={errors}
      />

      <BehaviorSection
        behavior={formData.behavior}
        onChange={handleFieldChange}
        errors={errors}
      />

      <EvidenceSection
        evidence={formData.evidence}
        onUpload={handleEvidenceUpload}
        errors={errors}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Report'}
      </button>

      {/* Submission Modal */}
      <SubmissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        reportId={formData.id}
      />
    </form>
  );
}