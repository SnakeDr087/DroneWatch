import React from 'react';
import { FileText, Share2, Clock, CheckCircle } from 'lucide-react';

export function StatusGuide() {
  const statuses = [
    {
      icon: <FileText className="h-5 w-5 text-gray-500" />,
      status: "Draft",
      description: "Report is being prepared"
    },
    {
      icon: <Share2 className="h-5 w-5 text-blue-500" />,
      status: "Submitted",
      description: "Report sent to authorities"
    },
    {
      icon: <Clock className="h-5 w-5 text-yellow-500" />,
      status: "Processing",
      description: "Under review by authorities"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      status: "Completed",
      description: "Investigation concluded"
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Understanding Report Status</h3>
      <div className="space-y-3">
        {statuses.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
            {item.icon}
            <div>
              <span className="font-medium">{item.status}</span>
              <span className="text-sm text-gray-600 ml-2">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}