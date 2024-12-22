import React from 'react';
import { HelpCircle } from 'lucide-react';

export function SupportSection() {
  const supportOptions = [
    "Email support: support@dronewatch.com",
    "Emergency hotline: (800) 555-0123",
    "Visit our Help Center for guides and FAQs",
    "Live chat available during business hours"
  ];

  return (
    <section className="border-t pt-6">
      <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <HelpCircle className="h-5 w-5 text-blue-400" />
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-800">Support Options</h4>
            <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
              {supportOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}