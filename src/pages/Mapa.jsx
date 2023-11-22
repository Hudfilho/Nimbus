import "../components/Mapa/styles.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import AreaSelect from "../components/Mapa/AreaSelect";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import React from "react";
import Papa from "papaparse";

const markers = [
  {
    geocode: [-23.005799390382244, -43.313602068535985],
    popUp: "Ibmec Barra",
  },
  {
    geocode: [-22.997741649198378, -43.358128330416584],
    popUp: "Barra Shopping",
  },
  {
    geocode: [-22.955983568491277, -43.33723170150643],
    popUp: "Park Jacarepagua",
  },
  {
    geocode: [-22.937233441170832, -43.343817659716606],
    popUp: "Garriga de Menezes",
  },
];

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  iconSize: [38, 38],
});

const customIconInsideArea = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/727/727606.png",
  iconSize: [38, 38],
});

const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

function MAPA() {
  const [drawnLayers, setDrawnLayers] = React.useState(null);
  const [markersInsideDrawnArea, setMarkersInsideDrawnArea] = React.useState(
    []
  );

  const handleDrawCreated = (e) => {
    setDrawnLayers(e.layer);

    const drawnAreaBounds = e.layer.getBounds();
    const markersInsideArea = markers.filter((marker) =>
      drawnAreaBounds.contains(marker.geocode)
    );

    setMarkersInsideDrawnArea(markersInsideArea);

    console.log("Icones na area:", markersInsideArea);
  };

  const handleDrawDeleted = () => {
    setDrawnLayers(null);
    setMarkersInsideDrawnArea([]); // Clear the selected markers when the area is deselected
  };

  const exportToCSV = () => {
    const csvData = Papa.unparse(markersInsideDrawnArea, {
      header: true,
    });

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "icones_selecionados.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Não foi possivel fazer o download. Erro no browser.");
    }
  };

  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>MAPA</h1>
      <div>
        <MapContainer
          center={[-22.9921, -43.3249]}
          zoom={13}
          style={{ height: "90vh", width: "100%" }}
        >
          <FeatureGroup>
            <EditControl
              onCreated={handleDrawCreated}
              onDeleted={handleDrawDeleted}
              draw={{
                rectangle: true,
                polyline: true,
                marker: false,
                circlemarker: false,
              }}
            />
          </FeatureGroup>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunckedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {markers.map((marker, index) => {
              const isInsideDrawnArea =
                drawnLayers && drawnLayers.getBounds().contains(marker.geocode);

              return (
                <Marker
                  key={index}
                  position={marker.geocode}
                  icon={isInsideDrawnArea ? customIconInsideArea : customIcon}
                >
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <button onClick={exportToCSV}>Exportar para CSV</button>
    </div>
  );
}

export default MAPA;
