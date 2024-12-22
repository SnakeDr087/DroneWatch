import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import { RiskCard } from '../components/RiskCard';

export function WhySection() {
  const risks = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Public Safety",
      description: "Emergency response disruptions and potential hazards to public spaces."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Privacy Violations",
      description: "Unwanted surveillance over private spaces and sensitive areas."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Airspace Threats",
      description: "Unauthorized activity near airports and restricted zones."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="why-it-matters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Airspace Security Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unauthorized drones threaten safety, privacy, and operations. By reporting drone activity, 
            you help prevent incidents, protect your community, and ensure airspace security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <RiskCard key={index} {...risk} />
          ))}
        </div>
      </div>
    </section>
  );
}