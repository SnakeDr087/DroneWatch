import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { NewsletterSection } from './sections/NewsletterSection';
import { Footer } from '../layout/Footer';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}