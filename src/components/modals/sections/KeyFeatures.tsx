import React from 'react';
import { MapPin, Camera, AlertTriangle, Clock } from 'lucide-react';

export function KeyFeatures() {
  const features = [
    {
      icon: <MapPin className="h-5 w-5 text-blue-500 mt-1" />,
      title: "Precise Location Tracking",
      description: "Automatically capture exact GPS coordinates of incidents"
    },
    {
      icon: <Camera className="h-5 w-5 text-green-500 mt-1" />,
      title: "Evidence Management",
      description: "Upload and organize photos, videos, and audio recordings"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />,
      title: "Emergency Prioritization",
      description: "Urgent incidents receive immediate attention and routing"
    },
    {
      icon: <Clock className="h-5 w-5 text-purple-500 mt-1" />,
      title: "Real-time Updates",
      description: "Track report status and authority responses instantly"
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            {feature.icon}
            <div>
              <h4 className="font-medium">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}