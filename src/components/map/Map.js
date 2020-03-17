import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import SubmitButton from '../login/SubmitButton';

const Wrapper = styled.div`
    width: 1280px;
    height: 720px;
`;


const urlMapa_1_montania = 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png';
const urlMapa_2_satelite = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';



export default class Map2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nMapa: 1,
            url: urlMapa_1_montania,
        }
    }

    async cambiar() {
        if (this.state.nMapa == 1) {
            this.state.nMapa = 2;
            this.state.url = urlMapa_2_satelite;
            //this.componentDidMount();
        }
        else {
            this.state.nMapa = 1;
            this.state.url = urlMapa_1_montania;
            //this.componentDidMount();
        }

        L.tileLayer(this.state.url, {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);

    }


    componentDidMount() {
        this.map = L.map('map', {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });
        L.tileLayer(this.state.url, {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);
    }

    render() {

        return (
            <div className="Map">
                <br />
                <SubmitButton
                    text='Cambiar Mapa'
                    disabled={false}
                    onClick={() => this.cambiar()}
                />
                <Wrapper id="map" />
            </div>

        );
    }
}

