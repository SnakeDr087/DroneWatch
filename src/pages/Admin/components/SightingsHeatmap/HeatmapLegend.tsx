import React from 'react';

interface HeatmapLegendProps {
  maxValue: number;
}

export function HeatmapLegend({ maxValue }: HeatmapLegendProps) {
  const steps = 5;
  const gradient = Array.from({ length: steps }, (_, i) => i / (steps - 1));

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm text-gray-600">Intensity:</div>
      <div className="flex items-center">
        {gradient.map((intensity, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-8 h-8"
              style={{ backgroundColor: `rgb(59, 130, 246, ${intensity})` }}
            />
            <div className="text-xs text-gray-600 mt-1">
              {Math.round(maxValue * intensity)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}