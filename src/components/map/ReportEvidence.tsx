import React from 'react';
import { Camera } from 'lucide-react';
import type { Evidence } from '../../types/report';

interface ReportEvidenceProps {
  evidence: Evidence[];
}

export function ReportEvidence({ evidence }: ReportEvidenceProps) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Camera className="h-5 w-5" />
        Evidence
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {evidence.map((item) => (
          <div key={item.id} className="border rounded p-2">
            <p className="text-sm text-gray-600">{item.file.name}</p>
            <p className="text-xs text-gray-500">
              {(item.file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}