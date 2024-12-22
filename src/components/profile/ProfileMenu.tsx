import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu">
        <div className="px-4 py-2 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500">john.doe@example.com</p>
        </div>

        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          onClick={onClose}
        >
          <User className="mr-3 h-4 w-4" />
          Your Profile
        </Link>

        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          onClick={onClose}
        >
          <Settings className="mr-3 h-4 w-4" />
          Settings
        </Link>

        <button
          className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
          role="menuitem"
          onClick={onClose}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  );
}