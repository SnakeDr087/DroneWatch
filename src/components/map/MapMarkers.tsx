import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { DroneReport } from '../../types/report';
import { ReportPopup } from './ReportPopup';

// Custom icon for markers based on emergency status
const getCustomIcon = (emergencyStatus: string) => new Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${
    emergencyStatus === 'emergency' ? 'red' :
    emergencyStatus === 'urgent' ? 'yellow' :
    'blue'
  }.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapMarkersProps {
  reports: DroneReport[];
}

export function MapMarkers({ reports }: MapMarkersProps) {
  return (
    <>
      {reports.map(report => (
        <Marker
          key={report.id}
          position={[report.location.latitude, report.location.longitude]}
          icon={getCustomIcon(report.emergencyStatus)}
        >
          <Popup>
            <ReportPopup report={report} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}