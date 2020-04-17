import React from 'react';
import "leaflet/dist/leaflet.css";
import { AuthButton } from "@solid/react";

const popUri = "https://solid.community/common/popup.html";


export default class LoginButton extends React.Component {
    
    render() {

        return (
            <div data-testid="divLogin">
                <AuthButton className="btn" popup={popUri} login="Iniciar Sesión"logout="Desconectar" />
            </div>
        );
    }
}