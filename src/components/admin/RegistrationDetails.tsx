import React from 'react';
import { X, User, Mail, Phone, MapPin, Building2, UserCircle } from 'lucide-react';

interface RegistrationDetailsProps {
  registration: any;
  onClose: () => void;
}

export function RegistrationDetails({ registration, onClose }: RegistrationDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium">Registration Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <User className="h-4 w-4" />
                <span>Name</span>
              </div>
              <p className="text-gray-900">{registration.name}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </div>
              <p className="text-gray-900">{registration.email}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </div>
              <p className="text-gray-900">{registration.phone}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <MapPin className="h-4 w-4" />
                <span>Address</span>
              </div>
              <p className="text-gray-900">{registration.address}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <Building2 className="h-4 w-4" />
                <span>Organization</span>
              </div>
              <p className="text-gray-900">{registration.organization}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
                <UserCircle className="h-4 w-4" />
                <span>Role</span>
              </div>
              <p className="text-gray-900">{registration.role}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
              <span>Registration Date</span>
            </div>
            <p className="text-gray-900">
              {new Date(registration.date).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}