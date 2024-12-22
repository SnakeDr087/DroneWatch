import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Map, Newspaper, BookOpen, Settings, Shield } from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
  { to: '/report', icon: <FileText />, label: 'Report' },
  { to: '/map', icon: <Map />, label: 'Map' },
  { to: '/news', icon: <Newspaper />, label: 'News Hub' },
  { to: '/resources', icon: <BookOpen />, label: 'Resources' },
  { to: '/settings', icon: <Settings />, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-black text-white">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <Shield className="h-8 w-8 text-yellow-400" />
        <span className="ml-2 text-xl font-bold">DroneWatch</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-yellow-400 text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <span className="w-6 h-6">{item.icon}</span>
            <span className="ml-3">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}