import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: [] as string[],
    frequency: 'weekly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse';
    const queryString = new URLSearchParams({
      'entry.1': formData.name,
      'entry.2': formData.email,
      'entry.3': formData.interests.join(', '),
      'entry.4': formData.frequency
    }).toString();

    window.open(`${formUrl}?${queryString}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-4">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 mt-2">
              Get the latest updates on drone safety and regulations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Areas of Interest
              </label>
              <div className="space-y-2">
                {[
                  'Drone Safety Updates',
                  'Regulatory Changes',
                  'Community Alerts',
                  'Training Resources'
                ].map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={(e) => {
                        const newInterests = e.target.checked
                          ? [...formData.interests, interest]
                          : formData.interests.filter(i => i !== interest);
                        setFormData({ ...formData, interests: newInterests });
                      }}
                      className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Frequency
              </label>
              <select
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="weekly">Weekly Digest</option>
                <option value="biweekly">Bi-weekly Updates</option>
                <option value="monthly">Monthly Newsletter</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Subscribe Now
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By subscribing, you agree to receive updates about drone safety and regulations.
              You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}