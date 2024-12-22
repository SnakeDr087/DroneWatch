import React from 'react';
import { FileText, ListFilter, Bell, Download } from 'lucide-react';

interface Section {
  title: string;
  icon: React.ReactNode;
  steps: string[];
}

export function ReportManagement() {
  const sections: Section[] = [
    {
      title: "Creating Reports",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      steps: [
        'Click "Submit Report" from any page',
        'Fill in all required information about the incident',
        'Upload any available evidence (photos, videos)',
        'Review and submit your report'
      ]
    },
    {
      title: "Tracking Reports",
      icon: <ListFilter className="h-5 w-5 text-green-500" />,
      steps: [
        'View all reports in the Dashboard',
        'Filter reports by date, status, or location',
        'Receive notifications for status updates',
        'Download reports for offline access'
      ]
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Report Management</h3>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              {section.icon}
              <h4 className="font-medium">{section.title}</h4>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}