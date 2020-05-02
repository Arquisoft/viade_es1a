import React from "react";
//import { observer } from "mobx-react";
import { LoggedOut, LoggedIn } from "@solid/react";


import logo from "../static/images/ViaDe.svg";
import User from "./login/User";
import LoginButton from "./login/LoginButton";
import UploadToPod from "./solidPod/UploadToPod";
import Map from "./map/Map";
import Share from "./share/Share";
import Notification from "./notifications/Notification";
import { useTranslation } from 'react-i18next';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";



import "../static/css/Main.css";

class Main extends React.Component {
  render() {
    const Iniciar = () => {
      const { t } = useTranslation();

      return (<div data-testid="ses">{t('Sesion.1')}</div>);
    };
    return (
      
      <div className="app" data-testid="App">
        <div className="container" data-testid="container">
<<<<<<< HEAD
          <div className="identification">
            <LoggedOut>
              <img src={logo} className="App-logo" alt="logo" data-testid="logo"/>
              <h2 data-testid="IniciaSesion">Iniciar sesión</h2>
              <LoginButton/>
            </LoggedOut>
          </div>

          <LoggedIn>
            <div className = "nav">
              <div className = "nav nav-usr"><User /></div>
              <Notification />
              <div className = "lgnBtn"><LoginButton /></div>
            </div>

=======
          <LoggedOut>
            <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
            <h2 data-testid="IniciaSesion">{<Iniciar></Iniciar>}</h2>
            <LoginButton />
          </LoggedOut>

          <LoggedIn>

            <User />
>>>>>>> master
            <Map />
            <UploadToPod />

            <div className = "share">
              <div className = "shrCmp"><Share /></div>
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