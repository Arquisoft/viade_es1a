import React from "react";
import logo from "../static/images/ViaDe.svg";
import "../static/css/login.css";
import { observer } from "mobx-react";
import Map from "./map/Map";
import { AuthButton, LoggedOut, LoggedIn } from "@solid/react";

function Imagen() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}

// function refreshPage() {
//   window.location.reload(false);
// }

class Main extends React.Component {
  render() {
    const popUri = "https://solid.community/common/popup.html"
    return (
      <div className="App">
        <div className="container">
          <LoggedOut>
            {Imagen()}
            <h2>Iniciar sesión</h2>
            <AuthButton className="SubmitButton" popup={popUri} login="Identificate" logout="Desconectar" />
          </LoggedOut>
          <LoggedIn>
            <Map />
            <AuthButton className="SubmitButton" popup={popUri} login="Identificate" logout="Desconectar" />
          </LoggedIn>
        </div>
      </div>
    );
    }
}

export default observer(Main);
