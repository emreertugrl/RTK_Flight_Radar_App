import React from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { clearRoute } from "../redux/slices/infoSlice";

const Map = ({ setDetailId }) => {
  const dispatch = useDispatch();
  clearRoute();
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.info);

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

              <button className="" onClick={() => dispatch(clearRoute())}>
                Rotayı Temizle
              </button>
            </div>
          </Popup>
        </Marker>
      ))}

      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
