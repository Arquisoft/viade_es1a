import React from 'react';
import "leaflet/dist/leaflet.css";
import { AuthButton } from "@solid/react";
import { useTranslation } from 'react-i18next';

const popUri = "https://solid.community/common/popup.html";


export default class LoginButton extends React.Component {


    render() {

        const Desconectarse = () => {
            const { t } = useTranslation();

            return (<div>{t('Desconectar.1')}</div>);
        };

        return (
            <div data-testid="divLogin">
                <AuthButton className="btn" popup={popUri} login="Iniciar Sesión" logout={<Desconectarse></Desconectarse>} />
            </div>
        );
    }
}