import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { NewsletterModal } from './NewsletterModal';

export function NewsletterSignup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed & Protected
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Subscribe to receive updates about drone safety, regulation changes, and community alerts.
          </p>
          
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-lg flex items-center justify-center gap-3 transform hover:scale-105 duration-200"
            >
              <Mail className="h-6 w-6" />
              Subscribe to Updates
            </button>
            
            <p className="text-sm text-gray-500 mt-6">
              By subscribing, you agree to receive updates about drone safety and regulations. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <NewsletterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}