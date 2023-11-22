import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function AreaSelect({ markers }) {
  const mapa = useMap();

  useEffect(() => {
    if (!mapa.selectArea) return;

    mapa.selectArea.enable();

    mapa.on("areaselected", (e) => {
      const selectedAreaBounds = e.bounds;
      const selectedMarkers = markers.filter((marker) =>
        selectedAreaBounds.contains(marker.geocode)
      );

      console.log("Marcadores Selecionados:", selectedMarkers);
    });

    const bounds = mapa.getBounds().pad(-0.25);
    mapa.selectArea.setValidate((layerPoint) => {
      return bounds.contains(this._mapa.layerPointToLatLng(layerPoint));
    });

    mapa.selectArea.setValidate();
  }, [mapa, markers]);

  return null;
}
