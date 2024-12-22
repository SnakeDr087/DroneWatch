import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

interface ProfileSectionProps {
  profile: {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar?: string;
  };
  onUpdate: (field: string, value: string) => void;
}

export function ProfileSection({ profile, onUpdate }: ProfileSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    Object.entries(tempProfile).forEach(([field, value]) => {
      onUpdate(field, value);
    });
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfile(prev => ({
          ...prev,
          avatar: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-4">
            <button
              onClick={() => {
                setTempProfile(profile);
                setIsEditing(false);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      
      <div className="flex items-start space-x-6 mb-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {tempProfile.avatar ? (
              <img src={tempProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-12 h-12 text-gray-400" />
            )}
          </div>
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 cursor-pointer">
              <Camera className="w-4 h-4" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={tempProfile.name}
                onChange={(e) => setTempProfile(prev => ({ ...prev, name: e.target.value }))}
                disabled={!isEditing}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={tempProfile.email}
                onChange={(e) => setTempProfile(prev => ({ ...prev, email: e.target.value }))}
                disabled={!isEditing}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                value={tempProfile.phone}
                onChange={(e) => setTempProfile(prev => ({ ...prev, phone: e.target.value }))}
                disabled={!isEditing}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={tempProfile.address}
                onChange={(e) => setTempProfile(prev => ({ ...prev, address: e.target.value }))}
                disabled={!isEditing}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}