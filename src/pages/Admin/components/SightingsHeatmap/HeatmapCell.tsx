import React from 'react';

interface HeatmapCellProps {
  value: number;
  maxValue: number;
  date: string;
}

export function HeatmapCell({ value, maxValue, date }: HeatmapCellProps) {
  const intensity = maxValue > 0 ? (value / maxValue) : 0;
  const backgroundColor = `rgb(59, 130, 246, ${intensity})`;

  return (
    <div
      className="bg-white p-2 text-center text-xs relative group"
      style={{ backgroundColor }}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
        <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
          {date}: {value} sightings
        </div>
      </div>
    </div>
  );
}