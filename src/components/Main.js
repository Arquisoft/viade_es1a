import React from "react";
import { LoggedOut, LoggedIn } from "@solid/react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import logo from "../static/images/ViaDe.svg";
import User from "./login/User";
import LoginButton from "./login/LoginButton";
import UploadToPod from "./solidPod/UploadToPod";
import Map from "./map/Map";
import Share from "./share/Share";
import Notification from "./notifications/Notification";
import NotFoundPage from "./NotFoundPage";
import I from "./commons/Internationalization";
import ISelector from "./login/ISelector";

import "../static/css/Main.css";

class Main extends React.Component {

  update() {
    this.forceUpdate();
}

  render() {
    return (
      <div className="app" id="inter" data-testid="App">
        <div className="container" data-testid="container">
          <div className="identification">
            <LoggedOut>
              <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
              <h2 data-testid="IniciaSesion" >{I.Option.Sesion}</h2>
              <LoginButton />
            </LoggedOut>
          </div>

          <LoggedIn>
            <div className="nav">
              <ISelector update={this.update.bind(this)} />
              <div className="nav nav-usr"><User /></div>
              <Notification />
              <LoginButton />
            </div>

            <Map />
            <UploadToPod />

            <div className="share">
              <div className="shrCmp"><Share /></div>
            </div>

          </LoggedIn>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;




//export default observer(Main);