import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Report Suspicious Drone Activity
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Help maintain our airspace security by reporting unauthorized drone operations.
            Your report will be automatically forwarded to relevant authorities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors">
              Submit a Report
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors">
              Learn More
            </button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="h-5 w-5" />
            <span>For emergencies, call 911 immediately</span>
          </div>
        </div>
      </div>
    </section>
  );
}