import React from "react";
import { observer } from "mobx-react";
import { LoggedOut, LoggedIn } from "@solid/react";

import "../static/css/login.css";
import logo from "../static/images/ViaDe.svg";
import User from "./login/User";
import LoginButton from "./login/LoginButton";
import UploadToPod from "./solidPod/UploadToPod";
import Map from "./map/Map";
import Share from "./share/Share";
import Notification from "./notifications/Notification";
import { useTranslation } from 'react-i18next';



class Main extends React.Component {
  render() {
    const Iniciar = () => {
      const { t } = useTranslation();

      return (<div>{t('Sesion.1')}</div>);
  };
    return (
      <div className="App" data-testid="App">
        <div className="container" data-testid="container">
          <LoggedOut>
            <img src={logo} className="App-logo" alt="logo" data-testid="logo"/>
            <h2 data-testid="IniciaSesion">{<Iniciar></Iniciar>}</h2>
            <LoginButton/>
          </LoggedOut>

          <LoggedIn>
            <User />
            <Map />
            <UploadToPod />
            <Notification />
            <Share />
            <LoginButton />
          </LoggedIn>
        </div>
      </div>
    );
  }
}

export default observer(Main);