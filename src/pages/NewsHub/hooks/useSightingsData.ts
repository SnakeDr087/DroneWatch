import { useMemo } from 'react';
import { subDays, format } from 'date-fns';
import type { DroneReport } from '../../../types/report';

export function useSightingsData(sightings: DroneReport[]) {
  return useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(new Date(), i);
      return format(date, 'yyyy-MM-dd');
    }).reverse();

    const categories = ['civilian', 'military', 'unidentified'];
    const datasets = categories.map(category => ({
      label: category.charAt(0).toUpperCase() + category.slice(1),
      data: last30Days.map(date => 
        sightings.filter(s => 
          format(new Date(s.dateTime), 'yyyy-MM-dd') === date &&
          s.category === category
        ).length
      ),
      borderColor: 
        category === 'civilian' ? '#3B82F6' :
        category === 'military' ? '#10B981' :
        '#EF4444',
      fill: false
    }));

    return {
      chartData: {
        labels: last30Days.map(date => format(new Date(date), 'MMM d')),
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: {
            position: 'bottom' as const
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    };
  }, [sightings]);
}