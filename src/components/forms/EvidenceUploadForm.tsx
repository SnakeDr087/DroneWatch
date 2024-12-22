import React, { useCallback } from 'react';
import { Upload, File, X } from 'lucide-react';
import type { Evidence } from '../../types/report';

interface EvidenceUploadFormProps {
  evidence: Evidence[];
  onEvidenceAdd: (files: FileList) => void;
  onEvidenceRemove: (id: string) => void;
}

export default function EvidenceUploadForm({
  evidence,
  onEvidenceAdd,
  onEvidenceRemove
}: EvidenceUploadFormProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onEvidenceAdd(e.dataTransfer.files);
    }
  }, [onEvidenceAdd]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Upload className="h-5 w-5" />
        Evidence Upload
      </h2>
      
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="text-center">
          <input
            type="file"
            id="file-upload"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && onEvidenceAdd(e.target.files)}
            accept="image/*,video/*,audio/*"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center space-x-2"
          >
            <Upload className="h-5 w-5 text-gray-400" />
            <span className="text-blue-500 hover:text-blue-600">
              Click to upload or drag and drop
            </span>
          </label>
          <p className="text-xs text-gray-500 mt-2">
            Supports images, videos, and audio files (max 10MB each)
          </p>
        </div>
      </div>

      {evidence.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Uploaded Evidence</h3>
          <ul className="divide-y divide-gray-200 bg-gray-50 rounded-lg">
            {evidence.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-3 hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <File className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(item.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onEvidenceRemove(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}