import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import Button from "../basics/BasicButton";
import ReactFileReader from "react-file-reader";
import geojson from "../../static/files/prueba3.geojson";

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

export default class Map2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nMapa: 1,
            mapa: Mapa1,
        };
    }

    handleFiles = files => {
        var string = "";
        var reader = new FileReader();
        
        reader.onload = function () {
          // Use reader.result
          //Aqui habria que parsear el archivo y mostrarlo en el mapa
          string = reader.result
          alert(reader.result)
          L.geoJSON(reader.result).addTo(this.map);
        }
        reader.readAsText(files[0]);
      }

      aux(){

      }

    async cambiar() {
        if (this.state.nMapa === 1) {
            this.state.nMapa = 2;
            this.state.mapa = Mapa2;
            Mapa1.removeFrom(this.map);
        }
        else {
            this.state.nMapa = 1;
            this.state.mapa = Mapa1;
            Mapa2.removeFrom(this.map);
        }

        this.state.mapa.addTo(this.map);
    }


    componentDidMount() {
        this.map = L.map("map", {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });
        this.state.mapa.addTo(this.map);
    }

    render() {

        return (
            <div className="Map">
                <br />
                <Button
                    class="btn"
                    text="Cambiar Mapa"
                    disabled={false}
                    onClick={() => this.cambiar()}
                />
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.geojson'}>
                    <button className="btn">Upload</button>
                </ReactFileReader>
                <Wrapper id="map" />
            </div>

        );
    }
}

