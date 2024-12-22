import React, { useState } from 'react';
import { Eye, FileText, Share2, Activity } from 'lucide-react';
import { HowItWorksModal } from '../../modals/HowItWorksModal';

export function HowItWorksSection() {
  const [showModal, setShowModal] = useState(false);

  const steps = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Detect",
      description: "Spot suspicious drone activity in your area"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Report",
      description: "Submit detailed information including location and evidence"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Connect",
      description: "Information is securely shared with relevant authorities"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Track",
      description: "Monitor incident status and view regional patterns"
    }
  ];

  return (
    <>
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How DroneWatch Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, effective process for reporting and tracking suspicious drone activity
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}