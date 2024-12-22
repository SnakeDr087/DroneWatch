import React from 'react';
import { LogOut } from 'lucide-react';

interface SignOutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function SignOutDialog({ isOpen, onClose, onConfirm }: SignOutDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <LogOut className="h-6 w-6 text-red-600" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-center mb-2">Sign Out</h3>
        <p className="text-gray-500 text-center mb-6">
          Are you sure you want to sign out? You'll need to sign in again to access your account.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}