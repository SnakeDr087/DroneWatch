import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmergencyBanner } from './components/EmergencyBanner';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Shield className="h-20 w-20 text-yellow-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Secure Our Skies Together
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our network of vigilant observers helping to maintain airspace security. 
            Report suspicious drone activity quickly and efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/report"
              className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 text-lg"
            >
              Submit Report
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all text-lg"
            >
              Learn More
            </Link>
          </div>
          
          <EmergencyBanner />
        </div>
      </div>
    </section>
  );
}