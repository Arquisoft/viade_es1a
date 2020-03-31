import React from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import Button from "../basics/BasicButton";
const Json = require("./GetJSON");

const Wrapper = styled.div`
    width: 900px;
    height: 600px;
`;

const urlMapaMontania = "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png";
const urlMapaSatelite = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const Layer1 = Leaflet.tileLayer(urlMapaMontania, {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
});

// const Layer2 = Leaflet.tileLayer(urlMapaSatelite, {
//     detectRetina: true,
//     maxZoom: 20,
//     maxNativeZoom: 17
// });

// function handleFiles(map) {
//     map.setView([50.7924094, -1.0934092], 15);
//     Leaflet.geoJSON(Json.getData()).addTo(map);
// }

// async function cambiar(layer, map) {
//     if (layer === Layer1) {
//         layer = Layer2;
//         Layer1.removeFrom(map);
//     }
//     else {
//         layer = Layer1;
//         Layer2.removeFrom(map);
//     }

//     layer.addTo(map);
// }

function Map() {
    var layer = Layer1;
    var map = Leaflet.map("map", { center: [43.3602900, -5.8447600], zoom: 10, zoomControl: false });
    layer.addTo(map);
    return (
        <Wrapper id="map" />
    );
}

export default Map;


/*
<Button
                class="btn"
                text="Cambiar Mapa"
                disabled={false}
                onClick={() => cambiar(layer, map)}
            />
            */