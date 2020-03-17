import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.with};
    height: ${props => props.height};
`;
    
export default class Map2 extends React.Component {

    componentDidMount(){
        this.map = L.map('map',{
            center: [58, 16],
            zoom: 6,
            zoomControl : false
        });

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17            
        }).addTo(this.map);

    }

    render(){
        return<Wrapper width="250px" height="250px" id="map"/>
    }
}

