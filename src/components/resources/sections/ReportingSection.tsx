import React from 'react';
import { FileText } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';

export function ReportingSection() {
  const reporting = [
    {
      title: 'State Fusion Centers',
      description: 'Information about state-level intelligence and security coordination centers.',
      link: 'https://www.dhs.gov/fusion-centers',
      category: 'Government'
    },
    {
      title: 'FAA Incident Reporting',
      description: 'Official channel for reporting drone-related incidents to the FAA.',
      link: 'https://www.faa.gov/uas/public_safety_gov/drone_incident_reporting',
      category: 'Reporting'
    },
    {
      title: 'NASA Aviation Safety',
      description: 'Report aviation safety incidents through NASA\'s reporting system.',
      link: 'https://asrs.arc.nasa.gov/',
      category: 'Safety'
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-yellow-500" />
        Reporting Resources
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reporting.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}