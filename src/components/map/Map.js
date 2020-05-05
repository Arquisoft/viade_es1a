import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import Button from "../basics/BasicButton";
import MapList from "../solidPod/MapList";
import properties from "../commons/Properties";
import "../../static/css/Main.css";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";

const Wrapper = styled.div`
    width: 1080px;
    height: 566px;
`;



class Map extends React.Component {

    constructor(props) {

        super(props);
        this.actual = 0;
        this.layer = null;
    }

    componentDidMount() {
        this.map = L.map("map", {
            center: [43.3602900, -5.8447600],
            zoom: 10,
            zoomControl: false
        });
        this.setLayer();
    }

    handleFiles(fileJson) {
        var error_center = 0;

        try {
            let center = [];
            center[0] = fileJson.features[0].geometry.coordinates[0][1];
            center[1] = fileJson.features[0].geometry.coordinates[1][0];
            this.map.setView(center, 15);

        } catch (error) {
            error_center = 1;
        }
        try {
            L.geoJSON(fileJson).addTo(this.map);

            if(error_center === 1){
                notification("warning", I.Option.ErrorCentro, I.Option.ErrorCentroDescripcion);
            }
        }catch (error) {
            notification("danger", I.Option.ErrorMapaIncompatible);
        }
    }

    async cambiar() {
        this.actual = this.actual + 1;
        if (this.actual >= properties.layers.length) {
            this.actual = 0;
        }

        this.layer.removeFrom(this.map);
        this.setLayer();
    }

    setLayer() {
        this.layer = L.tileLayer(
            properties.layers[this.actual], {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17
        });
        this.layer.addTo(this.map);
    }


    render() {
        return (
            <React.Fragment>
                <div className="row">

                    <div className="col-sm">
                        <div>
                            <Button
                                class="btn"

                                disabled={false}
                                onClick={() => this.cambiar()}
                                data-testid="cambiarLayer"

                                text={I.Option.Layer}
                            />
                            <Wrapper id="map" data-testid="map" />
                        </div>
                        <div className="col-sm">
                            <MapList handleFiles={this.handleFiles.bind(this)} />

                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Map;