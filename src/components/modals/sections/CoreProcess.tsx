import React from 'react';
import { Eye, FileText, Share2, Activity } from 'lucide-react';

export function CoreProcess() {
  const steps = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "1. Detect",
      description: "Identify and document suspicious drone activity in your area",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "2. Document",
      description: "Collect evidence including photos, videos, and flight patterns",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "3. Report",
      description: "Submit detailed information through our secure platform",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "4. Track",
      description: "Monitor report status and view incident patterns",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Core Reporting Process</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.bgColor} ${step.textColor} mb-3`}>
              {step.icon}
            </div>
            <h4 className="font-medium mb-2">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}