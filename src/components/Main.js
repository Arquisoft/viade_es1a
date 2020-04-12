import React from "react";
import { observer } from "mobx-react";
import { LoggedOut, LoggedIn } from "@solid/react";


import logo from "../static/images/ViaDe.svg";
import User from "./login/User";
import LoginButton from "./login/LoginButton";
import UploadToPod from "./solidPod/UploadToPod";
import Map from "./map/Map";
import Share from "./share/Share";
import Notification from "./notifications/Notification";

import "../static/css/app.css";

class Main extends React.Component {
  render() {

    return (
        <div className="app">
          <LoggedOut>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Iniciar sesión</h2>
            <LoginButton />
          </LoggedOut>

          <LoggedIn>
            <div className = "nav">
              <div className = "usrCmp"><User /></div>
              <div className = "notCmp"><Notification /></div>
              <div className = "lgnBtn"><LoginButton /></div>
            </div>

            <div className = "map">
              <div className = "mapCmp"><Map /></div>
              <div className = "uplCmp"><UploadToPod /></div>
            </div>

            <div className = "share">
              <div className = "shrCmp"><Share /></div>
            </div>

          </LoggedIn>
        </div>
    );
  }
}

export default observer(Main);