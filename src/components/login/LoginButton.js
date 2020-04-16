import React, { Component, Suspense } from 'react';
import "leaflet/dist/leaflet.css";
import { AuthButton } from "@solid/react";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

const popUri = "https://solid.community/common/popup.html";
class LegacyComponentClass extends Component {
    render() {
      const { t } = this.props;
  
      return (
        <div>{t('Desconectar.1')}</div>
      )
    }
  }
const MyComponent = withTranslation()(LegacyComponentClass)

export default class LoginButton extends React.Component {
    
    render() {

        return (
            <div data-testid="divLogin">
                <AuthButton className="btn" popup={popUri} login="Identificate" logout=<MyComponent></MyComponent> />
            </div>
        );
    }
}