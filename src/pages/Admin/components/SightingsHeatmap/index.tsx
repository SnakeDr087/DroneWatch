import React from 'react';
import { Activity } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function SightingsHeatmap() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Civilian Drones',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 60, 65],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Military/Government',
        data: [28, 48, 40, 19, 86, 27, 90, 85, 80, 75, 70, 65],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
      {
        label: 'Unidentified',
        data: [35, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Sightings'
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Drone Sightings Trend</h2>
      </div>

      <div className="h-[400px]">
        <Line data={data} options={options} />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          This chart shows the monthly trend of drone sightings categorized by type.
          Hover over data points to see detailed counts.
        </p>
      </div>
    </div>
  );
}