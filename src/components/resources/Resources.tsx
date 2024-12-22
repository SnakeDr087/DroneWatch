import React from 'react';
import { BookOpen } from 'lucide-react';
import { RegulationsSection } from './sections/RegulationsSection';
import { EducationSection } from './sections/EducationSection';
import { ReportingSection } from './sections/ReportingSection';
import { SafetySection } from './sections/SafetySection';

export function Resources() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6 text-yellow-500" />
        <h1 className="text-2xl font-bold">Resources</h1>
      </div>

      <div className="grid gap-8">
        <RegulationsSection />
        <EducationSection />
        <ReportingSection />
        <SafetySection />
      </div>
    </div>
  );
}