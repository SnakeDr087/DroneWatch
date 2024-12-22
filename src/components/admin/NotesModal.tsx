import React, { useState } from 'react';
import { X } from 'lucide-react';
import { adminService } from '../../services/adminService';

interface NotesModalProps {
  registrationId: string;
  notes: Array<{
    id: string;
    text: string;
    date: string;
    author: string;
  }>;
  onClose: () => void;
}

export function NotesModal({ registrationId, notes, onClose }: NotesModalProps) {
  const [newNote, setNewNote] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      await adminService.addNote(registrationId, newNote);
      setNewNote('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium">Notes & Comments</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {notes.length === 0 ? (
            <p className="text-gray-500 text-center">No notes yet</p>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-gray-900">{note.text}</p>
                    <span className="text-xs text-gray-500">
                      {new Date(note.date).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Added by {note.author}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <form onSubmit={handleSubmit}>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add a note..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              rows={3}
            />
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                disabled={!newNote.trim()}
                className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 disabled:opacity-50"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}