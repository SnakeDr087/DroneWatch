import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    const queryString = new URLSearchParams({
      'entry.1': email
    }).toString();

    window.open(`${formUrl}?${queryString}`, '_blank');
    setEmail('');
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="h-5 w-5" />
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-6">
              By subscribing, you agree to receive updates about drone safety and regulations. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}