import React from "react";
import { observer } from "mobx-react";
import { LoggedOut, LoggedIn } from "@solid/react";

import "../static/css/login.css";
import logo from "../static/images/ViaDe.svg";
import User from "./login/User";
import LoginButton from "./login/LoginButton";
import UploadToPod from "./solidPod/UploadToPod";
import MapList from "./solidPod/MapList";
import ButtonRoute from "./map/ButtonRoute";
import Map from "./map/Map";


class Main extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="container">
          <LoggedOut>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Iniciar sesión</h2>
            <LoginButton />
          </LoggedOut>

          <LoggedIn>
            <User />
            <UploadToPod />
            <MapList />
            {Map()}
            <LoginButton />
          </LoggedIn>
        </div>
      </div>
    );
  }
}

export default observer(Main);