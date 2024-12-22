import React from 'react';
import { Mail, Copy, X } from 'lucide-react';
import type { DroneReport } from '../../types/report';
import type { Authority } from '../../types/authorities';

interface ReportEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: DroneReport;
  authorities: Authority[];
  emailContent: {
    local: string;
    faa: string;
  };
}

export function ReportEmailModal({ 
  isOpen, 
  onClose, 
  report, 
  authorities, 
  emailContent 
}: ReportEmailModalProps) {
  if (!isOpen) return null;

  const handleCopyContent = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleEmailClick = (email: string, content: string) => {
    const subject = `Suspicious Drone Activity Report - ${report.location.latitude},${report.location.longitude}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Report Email Content</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Local Authority Email */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Local Authority Report</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {emailContent.local}
                </pre>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleCopyContent(emailContent.local)}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Content
                </button>
                <button
                  onClick={() => handleEmailClick(authorities[0].contact.email, emailContent.local)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Open in Email Client
                </button>
              </div>
            </div>

            {/* FAA Email */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FAA Report</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {emailContent.faa}
                </pre>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleCopyContent(emailContent.faa)}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Content
                </button>
                <button
                  onClick={() => handleEmailClick('uashelp@faa.gov', emailContent.faa)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Open in Email Client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}