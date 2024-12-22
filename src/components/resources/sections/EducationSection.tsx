import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';

export function EducationSection() {
  const education = [
    {
      title: 'Drone Pilot Training',
      description: 'Free online courses for drone operators and safety guidelines.',
      link: 'https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot',
      category: 'Training'
    },
    {
      title: 'Safety Guidelines',
      description: 'Best practices for safe drone operation and maintenance.',
      link: 'https://www.faa.gov/uas/recreational_flyers/knowledge_test_updates',
      category: 'Safety'
    },
    {
      title: 'TRUST Program',
      description: 'The Recreational UAS Safety Test (TRUST) for recreational flyers.',
      link: 'https://trust.modelaircraft.org/',
      category: 'Certification'
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-green-500" />
        Education & Training
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}