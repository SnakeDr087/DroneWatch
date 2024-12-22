import React from 'react';
import { Scale } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';

export function RegulationsSection() {
  const regulations = [
    {
      title: 'FAA Drone Regulations',
      description: 'Official guidelines and regulations for drone operations in the United States.',
      link: 'https://www.faa.gov/uas',
      category: 'Federal'
    },
    {
      title: 'Controlled Airspace Map',
      description: 'Interactive map showing restricted airspace and flight zones.',
      link: 'https://www.faa.gov/uas/recreational_flyers/where_can_i_fly',
      category: 'Maps'
    },
    {
      title: 'Registration Requirements',
      description: 'Learn about drone registration requirements and process.',
      link: 'https://faadronezone.faa.gov/',
      category: 'Compliance'
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Scale className="h-5 w-5 text-blue-500" />
        Regulations & Compliance
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regulations.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}