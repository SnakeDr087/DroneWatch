import React from 'react';
import { useForm } from '../../hooks/useForm';
import { AddressFields } from './AddressFields';
import { CoordinateFields } from './CoordinateFields';
import { DetailsFields } from './DetailsFields';
import { ConfirmationDialog } from '../shared/ConfirmationDialog';

interface SightingFormProps {
  onSubmit: (data: any) => void;
}

export function SightingForm({ onSubmit }: SightingFormProps) {
  const { 
    formData, 
    errors, 
    showConfirmation,
    handleChange,
    handleSubmit,
    setShowConfirmation,
    resetForm
  } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-sm text-blue-700">
          Add new drone sighting data to the map. All fields marked with * are required.
        </p>
      </div>

      <AddressFields 
        values={formData.address} 
        onChange={handleChange} 
        errors={errors}
      />
      
      <CoordinateFields 
        values={formData.coordinates}
        onChange={handleChange}
        errors={errors}
      />
      
      <DetailsFields 
        values={formData.details}
        onChange={handleChange}
        errors={errors}
      />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={resetForm}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Reset Form
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit Sighting
        </button>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleSubmit}
        title="Confirm Submission"
        message="Please verify that all information is accurate before submitting this drone sighting report."
      />
    </form>
  );
}