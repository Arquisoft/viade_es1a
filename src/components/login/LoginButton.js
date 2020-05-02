import React from 'react';
import "leaflet/dist/leaflet.css";
import { AuthButton } from "@solid/react";
import { useTranslation } from 'react-i18next';

const popUri = "https://solid.community/common/popup.html";


export default class LoginButton extends React.Component {


    render() {
 
        const Desconectarse = () => {
            const { t } = useTranslation();
 
            return (<div data-testid="descobt">{t('Desconectar.1')}</div>);
        };
        const Iniciar = () => {
            const { t } = useTranslation();
 
            return (<div data-testid="log">{t('Sesion.1')}</div>);
        };
        return (
            <div data-testid="divLogin">
                <AuthButton className="btn btn-primary" popup={popUri} login={<Iniciar></Iniciar>} logout={<Desconectarse></Desconectarse>} />
            </div>
        );
    }
}