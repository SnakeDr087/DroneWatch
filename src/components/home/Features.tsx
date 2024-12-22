import React from 'react';
import { MapPin, Shield, Clock, Send } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Automatic Location Detection",
      description: "Precise GPS coordinates for accurate reporting and response"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Multi-Agency Reporting",
      description: "Simultaneous notification to local, state, and federal authorities"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Processing",
      description: "Immediate submission and processing of incident reports"
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Evidence Upload",
      description: "Support for photos, videos, and audio evidence"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}