import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function EmailSubscription() {
  const [email, setEmail] = useState('jparham087@gmail.com');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app, this would make an API call
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-sm font-medium text-gray-700 mb-2">
        Subscribe to Updates
      </h3>
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          disabled={subscribed}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          <Mail className="h-4 w-4" />
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
      <p className="mt-2 text-xs text-gray-500">
        Get notified when new drone sightings are reported in your area.
      </p>
    </div>
  );
}