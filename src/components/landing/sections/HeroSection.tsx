import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function HeroSection() {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Shield className="h-20 w-20 text-yellow-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            DroneWatch
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our network of vigilant observers helping to maintain airspace security. 
            Report suspicious drone activity quickly and efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/login"
              className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 text-lg"
            >
              Submit Report
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#how-it-works"
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all text-lg"
            >
              How It Works
            </a>
          </div>
          
          <EmergencyBanner />
        </div>
      </div>
    </section>
  );
}