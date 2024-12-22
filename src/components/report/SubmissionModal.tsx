import React from 'react';
import { CheckCircle, Copy, Download } from 'lucide-react';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportId: string;
}

export function SubmissionModal({ isOpen, onClose, reportId }: SubmissionModalProps) {
  if (!isOpen) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(reportId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          
          <h3 className="text-lg font-medium mb-2">Report Submitted Successfully</h3>
          <p className="text-gray-600 mb-4">
            Your incident report has been received and will be reviewed by our team.
          </p>

          <div className="bg-gray-50 rounded-lg p-3 w-full mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Report ID:</span>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded">{reportId}</code>
                <button
                  onClick={handleCopyId}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Close
            </button>
            <button
              onClick={() => {/* Add download functionality */}}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}