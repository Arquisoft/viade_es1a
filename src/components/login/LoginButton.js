import React from 'react';
import "leaflet/dist/leaflet.css";
import { AuthButton } from "@solid/react";
import I from "../commons/Internationalization";


const popUri = "https://solid.community/common/popup.html";


export default class LoginButton extends React.Component {


    render() {
        return (
            <div data-testid="divLogin">
                <AuthButton className="btn btn-primary" popup={popUri} login={I.Option.Sesion} logout={I.Option.Desconectar} />
            </div>
        );
    }
}