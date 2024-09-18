import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useSelector } from "react-redux";

const Map = ({ setDetailId }) => {
  const { flights, isLoading, error } = useSelector((store) => store.flight);
  // console.log(flights);
  const planeIcon = new icon({
    iconUrl: "plane-icon.png",
    iconSize: [25, 25],
  });
  return (
    <MapContainer center={[39.9208, 34.926]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight, i) => (
        <Marker key={i} icon={planeIcon} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
