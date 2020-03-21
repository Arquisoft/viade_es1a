import React from "react";
import logo from "../static/images/ViaDe.svg";
import "../static/css/login.css";
import { observer } from "mobx-react";
import Map from "./map/Map";
import { LoggedOut, LoggedIn, useWebId } from "@solid/react";

import { User, UploadButton } from "./basics/User";
import LoginButton from "./login/LoginButton";

function imagen() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}

// function refreshPage() {
//   window.location.reload(false);
// }

class Main extends React.Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      //Aqui habria que parsear el archivo y mostrarlo en el mapa
      alert(reader.result)
    }
    reader.readAsText(files[0]);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <LoggedOut>
            {imagen()}
            <h2>Iniciar sesión</h2>
            <LoginButton />
          </LoggedOut>

          <LoggedIn>
            <User />
            <Map />
            <LoginButton />
          </LoggedIn>
        </div>
      </div>
    );
  }
}

export default observer(Main);
