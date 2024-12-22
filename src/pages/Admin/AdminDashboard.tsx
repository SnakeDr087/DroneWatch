import React from 'react';
import { Shield } from 'lucide-react';
import { MapManagement } from './components/MapManagement';
import { SightingsHeatmap } from './components/SightingsHeatmap';
import { ArticleFeed } from './components/ArticleFeed';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-yellow-500" />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid gap-8">
        <MapManagement />
        <SightingsHeatmap />
        <ArticleFeed />
      </div>
    </div>
  );
}