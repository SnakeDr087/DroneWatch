import React from 'react';
import { MapPin, Clock, User, Shield, Camera } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import { formatDateTime } from '../../utils/formatting';
import { LocationDetails } from './details/LocationDetails';
import { WitnessDetails } from './details/WitnessDetails';
import { DroneDetails } from './details/DroneDetails';
import { EvidenceDetails } from './details/EvidenceDetails';
import { StatusBadge } from '../shared/StatusBadge';
import { EmergencyBadge } from '../shared/EmergencyBadge';

interface ReportDetailsProps {
  report: DroneReport;
  onClose: () => void;
}

export function ReportDetails({ report, onClose }: ReportDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-yellow-500" />
            <h2 className="text-xl font-bold">Report #{report.id}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Status and Emergency Level */}
          <div className="flex items-center justify-between">
            <StatusBadge status={report.status} />
            <EmergencyBadge status={report.emergencyStatus} />
          </div>

          {/* Timestamp and Location Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Report Time</p>
                <p className="text-sm text-gray-600">{formatDateTime(report.dateTime)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Location</p>
                <p className="text-sm text-gray-600">
                  {report.location.latitude.toFixed(6)}°, {report.location.longitude.toFixed(6)}°
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <LocationDetails location={report.location} />
          <WitnessDetails witness={report.witness} />
          <DroneDetails 
            characteristics={report.droneCharacteristics} 
            behavior={report.behavior}
          />
          {report.evidence && report.evidence.length > 0 && (
            <EvidenceDetails evidence={report.evidence} />
          )}
        </div>
      </div>
    </div>
  );
}