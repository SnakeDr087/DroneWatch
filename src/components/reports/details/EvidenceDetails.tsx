import React from 'react';
import { Camera, File, Download } from 'lucide-react';
import type { Evidence } from '../../../types/report';

interface EvidenceDetailsProps {
  evidence: Evidence[];
}

export function EvidenceDetails({ evidence }: EvidenceDetailsProps) {
  return (
    <section className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Camera className="h-5 w-5" />
        Evidence
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {evidence.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <File className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">{item.file.name}</p>
                <p className="text-xs text-gray-500">
                  {(item.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Download className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}