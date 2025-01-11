import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Plus, Minus } from "lucide-react";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";

const MapZoomControl = ({ zoomLevel }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setZoom(zoomLevel);
  }, [zoomLevel, map]);
  return null;
};

const ResponsiveMap = () => {
  const [zoomLevel, setZoomLevel] = useState(13);
  const position = [22.6812, 75.8798];

  const hospitals = [
    {
      name: "My Hospital",
      position: [22.7236, 75.8632],
      description: "Description for My Hospital",
    },
    {
      name: "Medanta Hospital Indore",
      position: [22.7073, 75.8872],
      description: "Description for Medanta Hospital",
    },
    {
      name: "Bombay Hospital Indore",
      position: [22.7251, 75.8760],
      description: "Description for Bombay Hospital",
    },
    {
      name: "Suman Hospital",
      position: [22.7151, 75.8531],
      description: "Description for Suman Hospital",
    },
    {
      name: "Fortis Hospital Indore",
      position: [22.7450, 75.8323],
      description: "Description for Fortis Hospital",
    },
    {
      name: "Columbia Asia Hospital Indore",
      position: [22.7284, 75.8777],
      description: "Description for Columbia Asia Hospital",
    },
    {
      name: "Indore Heart Institute and Research Centre",
      position: [22.7114, 75.8991],
      description: "Description for Indore Heart Institute",
    },
    {
      name: "Narmada Hospital",
      position: [22.7031, 75.8593],
      description: "Description for Narmada Hospital",
    },
    {
      name: "Arvind Eye Hospital",
      position: [22.7178, 75.8644],
      description: "Description for Arvind Eye Hospital",
    },
    {
      name: "CHL Group of Hospitals",
      position: [22.7483, 75.8321],
      description: "Description for CHL Group of Hospitals",
    },
  ];
  

  const defaultIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const handleZoomIn = () => {
    if (zoomLevel < 18) {
      setZoomLevel(prev => prev + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 5) {
      setZoomLevel(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-16">
      <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-lg">
        <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Zoom in"
          >
            <Plus className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Zoom out"
          >
            <Minus className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <MapContainer
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={true}
          className="w-full h-full"
          zoomControl={false}
          style={{ zIndex: 1 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hospitals.map((hospital, index) => (
            <Marker key={index} position={hospital.position} icon={defaultIcon}>
              <Popup className="rounded-lg">
                <div className="p-2">
                  <h3 className="font-semibold mb-1">{hospital.name}</h3>
                  <p className="text-sm text-gray-600">{hospital.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <MapZoomControl zoomLevel={zoomLevel} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ResponsiveMap;
