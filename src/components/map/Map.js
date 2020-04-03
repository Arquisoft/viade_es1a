import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import Button from "../basics/BasicButton";
import MapList from "../solidPod/MapList";


const Json = require("./GetJSON");

const Wrapper = styled.div`
    width: 900px;
    height: 600px;
`;

const urllayerMontania = "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png";
const urllayerSatelite = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const layer1 = L.tileLayer(urllayerMontania, {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
});

const layer2 = L.tileLayer(urllayerSatelite, {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
});


class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nlayer: 1,
            layer: layer1
        };
    }

    handleFiles(fileJson)  {
        this.map.setView([50.7924094, -1.0934092], 15);
        L.geoJSON(fileJson.getData()).addTo(this.map);
    }

    async cambiar() {
        if (this.state.nlayer === 1) {
            this.state.nlayer = 2;
            this.state.layer = layer2;
            layer1.removeFrom(this.map);
        }
        else {
            this.state.nlayer = 1;
            this.state.layer = layer1;
            layer2.removeFrom(this.map);
        }

        this.state.layer.addTo(this.map);
    }


    componentDidMount() {
        this.map = L.map("map", {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });
        this.state.layer.addTo(this.map);
    }

    render() {

        return (
            <div className="Map">

                <MapList handleFiles = {this.handleFiles.bind(this)} />

                <Button
                    class="btn"
                    text="Cambiar layer"
                    disabled={false}
                    onClick={() => this.cambiar()}
                />
                <Button
                    class="btn"
                    text="Mostrar Json en el mapa"
                    disabled={false}
                    onClick={() => this.handleFiles(Json)} />
                <Wrapper id="map" />
            </div>

        );
    }
}

export default Map;