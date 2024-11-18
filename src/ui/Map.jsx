import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";

const MapContainers = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  background-color: rgb(136, 136, 136);
  /* height: 200px; */
  /* width: 100%; */
`;
function Map() {
  const [position, setPosition] = useState([40, 0]);
  return (
    <MapContainers>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapContainers>
  );
}

export default Map;
