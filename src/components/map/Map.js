import React from "react";
import L from "leaflet";
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

const Mapa1 = L.tileLayer(urlMapaMontania, {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
});

const Mapa2 = L.tileLayer(urlMapaSatelite, {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
});


export function handleFiles(mapita, mapaJson){

    //mapita.handleFiles(mapaJson).bind(this);

}


class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nMapa: 1,
            mapa: Mapa1,
            map: null
        };

        this.handleFiles = function (mapaJson)  {
            this.state.map.setView([50.7924094, -1.0934092], 15);
            L.geoJSON(mapaJson.getData()).addTo(this.state.map);
        }
    }



    async cambiar() {
        if (this.state.nMapa === 1) {
            this.state.nMapa = 2;
            this.state.mapa = Mapa2;
            Mapa1.removeFrom(this.state.map);
        }
        else {
            this.state.nMapa = 1;
            this.state.mapa = Mapa1;
            Mapa2.removeFrom(this.state.map);
        }

        this.state.mapa.addTo(this.state.map);
    }


    componentDidMount() {
        this.state.map = L.map("map", {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });
        this.state.mapa.addTo(this.state.map);
    }

    render() {

        return (
            <div className="Map">
                <Button
                    class="btn"
                    text="Cambiar Mapa"
                    disabled={false}
                    onClick={() => this.cambiar()}
                />
                <Button
                    class="btn"
                    text="Mostrar Json en el Mapa"
                    disabled={false}
                    onClick={() => this.handleFiles(Json)} />
                <Wrapper id="map" />
            </div>

        );
    }
}

export default Map;