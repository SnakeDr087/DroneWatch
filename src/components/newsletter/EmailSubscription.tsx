import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Email Updates</h3>
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={subscribed || !email}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {subscribed ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Subscribed!
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" />
              Subscribe
            </>
          )}
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-600">
        Receive daily updates about drone activity in your area
      </p>
    </div>
  );
}