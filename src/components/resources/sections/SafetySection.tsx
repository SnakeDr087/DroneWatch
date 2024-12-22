import React from 'react';
import { Shield } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';

export function SafetySection() {
  const safety = [
    {
      title: 'B4UFLY Mobile App',
      description: 'Official FAA app for checking airspace restrictions and requirements.',
      link: 'https://www.faa.gov/uas/recreational_flyers/where_can_i_fly/b4ufly',
      category: 'Tools'
    },
    {
      title: 'Weather Resources',
      description: 'Weather information and forecasts for drone operators.',
      link: 'https://www.weather.gov/aviation/',
      category: 'Weather'
    },
    {
      title: 'LAANC System',
      description: 'Low Altitude Authorization and Notification Capability for controlled airspace.',
      link: 'https://www.faa.gov/uas/programs_partnerships/data_exchange',
      category: 'Authorization'
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-red-500" />
        Safety Tools
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safety.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}