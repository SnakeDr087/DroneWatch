import React from 'react';
import { MapPin, Shield, Clock, Send, Users, Database } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export function FeaturesSection() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Precise Location Tracking",
      description: "Automatically detect and record exact coordinates for accurate reporting"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Multi-Agency Coordination",
      description: "Direct communication with local, state, and federal authorities"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Processing",
      description: "Instant submission and processing of incident reports"
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Secure Evidence Upload",
      description: "Protected transfer of photos, videos, and audio evidence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Network",
      description: "Connect with other observers and share incident patterns"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Database",
      description: "Track and analyze incident patterns across regions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Effective Reporting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools you need to report and track suspicious drone activity effectively.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}