import React from 'react';
import { format } from 'date-fns';
import { HeatmapCell } from './HeatmapCell';
import type { HeatmapData } from '../../types';

interface HeatmapGridProps {
  data: HeatmapData;
  maxValue: number;
}

export function HeatmapGrid({ data, maxValue }: HeatmapGridProps) {
  const months = Object.keys(data);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <div className="grid grid-cols-[auto_repeat(31,minmax(24px,1fr))] gap-px bg-gray-200">
          {/* Header row with days */}
          <div className="bg-white p-2" /> {/* Empty corner cell */}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className="bg-white p-2 text-center text-xs font-medium text-gray-600"
            >
              {i + 1}
            </div>
          ))}

          {/* Month rows */}
          {months.map(month => (
            <React.Fragment key={month}>
              <div className="bg-white p-2 text-sm font-medium text-gray-700">
                {format(new Date(2024, parseInt(month), 1), 'MMM')}
              </div>
              {Array.from({ length: 31 }, (_, day) => {
                const value = data[month]?.[day + 1] || 0;
                return (
                  <HeatmapCell
                    key={day}
                    value={value}
                    maxValue={maxValue}
                    date={`${format(new Date(2024, parseInt(month), day + 1), 'MMM d, yyyy')}`}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}