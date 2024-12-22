import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, MessageSquare } from 'lucide-react';
import { RegistrationDetails } from './RegistrationDetails';
import { NotesModal } from './NotesModal';

interface RegistrationRowProps {
  registration: any;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onApprove: (id: string) => void;
  onDeny: (id: string) => void;
}

export function RegistrationRow({
  registration,
  isSelected,
  onSelect,
  onApprove,
  onDeny
}: RegistrationRowProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(registration.id)}
            className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
          />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {new Date(registration.date).toLocaleDateString()}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{registration.name}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{registration.email}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{registration.role}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
            ${registration.status === 'approved' ? 'bg-green-100 text-green-800' :
              registration.status === 'denied' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'}`}>
            {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(true)}
              className="text-blue-600 hover:text-blue-900"
              title="View Details"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={() => setShowNotes(true)}
              className="text-gray-600 hover:text-gray-900"
              title="View Notes"
            >
              <MessageSquare className="h-5 w-5" />
            </button>
            <button
              onClick={() => onApprove(registration.id)}
              disabled={registration.status !== 'pending'}
              className="text-green-600 hover:text-green-900 disabled:opacity-50"
              title="Approve"
            >
              <CheckCircle className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDeny(registration.id)}
              disabled={registration.status !== 'pending'}
              className="text-red-600 hover:text-red-900 disabled:opacity-50"
              title="Deny"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        </td>
      </tr>

      {showDetails && (
        <RegistrationDetails
          registration={registration}
          onClose={() => setShowDetails(false)}
        />
      )}

      {showNotes && (
        <NotesModal
          registrationId={registration.id}
          notes={registration.notes}
          onClose={() => setShowNotes(false)}
        />
      )}
    </>
  );
}