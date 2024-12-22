import React, { useCallback } from 'react';
import { Camera, Upload, X } from 'lucide-react';

interface EvidenceSectionProps {
  evidence: File[];
  onUpload: (files: FileList) => void;
  errors: Record<string, string>;
}

export function EvidenceSection({ evidence, onUpload, errors }: EvidenceSectionProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onUpload(e.dataTransfer.files);
    }
  }, [onUpload]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files);
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Camera className="h-5 w-5" />
        Evidence Upload
      </h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors"
      >
        <input
          type="file"
          id="evidence-upload"
          multiple
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <label
          htmlFor="evidence-upload"
          className="cursor-pointer inline-flex flex-col items-center"
        >
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
          <span className="text-blue-600 hover:text-blue-700">
            Click to upload or drag and drop
          </span>
          <span className="text-sm text-gray-500 mt-1">
            Supports images and videos up to 50MB
          </span>
        </label>
      </div>

      {errors.evidence && (
        <p className="text-sm text-red-600">{errors.evidence}</p>
      )}

      {evidence.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Uploaded Files</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {evidence.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Camera className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}