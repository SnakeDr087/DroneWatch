import React, { useState } from 'react';
import { User, Settings, Bell, Shield, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SessionInfo } from './SessionInfo';
import { ActivitySummary } from './ActivitySummary';
import { SignOutDialog } from '../settings/SignOutDialog';
import { useAuth } from '../../hooks/useAuth';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    isSigningOut,
    showSignOutDialog,
    setShowSignOutDialog,
    handleSignOut
  } = useAuth();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>
        <span className="hidden md:block">John Doe</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          {/* ... other dropdown content ... */}

          {/* Sign Out Button */}
          <div className="p-2">
            <button
              onClick={() => setShowSignOutDialog(true)}
              disabled={isSigningOut}
              className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg disabled:opacity-50"
            >
              <LogOut className="mr-3 h-4 w-4" />
              {isSigningOut ? 'Signing out...' : 'Sign out'}
            </button>
          </div>
        </div>
      )}

      {/* Sign Out Dialog */}
      <SignOutDialog
        isOpen={showSignOutDialog}
        onClose={() => setShowSignOutDialog(false)}
        onConfirm={handleSignOut}
      />
    </div>
  );
}