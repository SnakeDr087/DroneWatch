import React, { useState } from 'react';
import { MapPin, Calendar, AlertTriangle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useMapStore } from '../../services/mapStore';

export function AddSightingForm() {
  const addSighting = useMapStore((state) => state.addSighting);
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    dateTime: '',
    droneType: '',
    altitude: '',
    description: '',
    category: 'civilian',
    emergencyStatus: 'routine'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const sighting = {
      id: uuidv4(),
      dateTime: formData.dateTime,
      location: {
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude)
      },
      droneCharacteristics: {
        type: formData.droneType,
        estimatedAltitude: formData.altitude
      },
      behavior: {
        description: formData.description
      },
      category: formData.category,
      status: 'submitted',
      emergencyStatus: formData.emergencyStatus,
      witness: {
        name: 'Admin User',
        phone: '555-0123',
        email: 'admin@example.com'
      },
      evidence: []
    };

    addSighting(sighting);
    
    // Reset form
    setFormData({
      latitude: '',
      longitude: '',
      dateTime: '',
      droneType: '',
      altitude: '',
      description: '',
      category: 'civilian',
      emergencyStatus: 'routine'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Add New Sighting</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Latitude</label>
          <input
            type="number"
            step="any"
            required
            value={formData.latitude}
            onChange={(e) => setFormData(prev => ({ ...prev, latitude: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Longitude</label>
          <input
            type="number"
            step="any"
            required
            value={formData.longitude}
            onChange={(e) => setFormData(prev => ({ ...prev, longitude: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            required
            value={formData.dateTime}
            onChange={(e) => setFormData(prev => ({ ...prev, dateTime: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Drone Type</label>
          <input
            type="text"
            value={formData.droneType}
            onChange={(e) => setFormData(prev => ({ ...prev, droneType: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="civilian">Civilian</option>
            <option value="military">Military/Government</option>
            <option value="unidentified">Unidentified</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Status</label>
          <select
            value={formData.emergencyStatus}
            onChange={(e) => setFormData(prev => ({ ...prev, emergencyStatus: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="routine">Routine</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Sighting
        </button>
      </div>
    </form>
  );
}