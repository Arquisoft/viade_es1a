import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1280px;
    height: 720px;
`;

export default class Map2 extends React.Component {

    componentDidMount() {
        this.map = L.map('map', {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        }).addTo(this.map);

    }

    render() {
        return(
        <div className="Map">
            <br/>
            <Wrapper id="map" />
        </div>
        );
    }
}

