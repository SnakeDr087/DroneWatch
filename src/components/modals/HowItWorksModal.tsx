import React from 'react';
import { X, Shield } from 'lucide-react';
import { CoreProcess } from './sections/CoreProcess';
import { KeyFeatures } from './sections/KeyFeatures';
import { ReportManagement } from './sections/ReportManagement';
import { StatusGuide } from './sections/StatusGuide';
import { SupportSection } from './sections/SupportSection';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">How DroneWatch Works</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <CoreProcess />
          <KeyFeatures />
          <ReportManagement />
          <StatusGuide />
          <SupportSection />
        </div>
      </div>
    </div>
  );
}