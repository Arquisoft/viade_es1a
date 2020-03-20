import React from "react";
import logo from "../static/images/ViaDe.svg";
import "../static/css/login.css";
import { observer } from "mobx-react";
import Map from "./map/Map";
import { AuthButton, LoggedOut, LoggedIn, useWebId} from "@solid/react";
import file_client from "solid-file-client";
import auth from "solid-auth-client";
import Welcome from "./login/User"


function imagen() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}

function crearArchivo(WebId){
  console.log(WebId);
  let fc = new file_client(auth);
  let url =  "https://adrifa13.solid.community/rutas/ruta1.json";
  fc.createFile(url, "prueba", "text/turtle");
}


// function refreshPage() {
//   window.location.reload(false);
// }

class Main extends React.Component {
  render() {
    const popUri = "https://solid.community/common/popup.html";
    return (
      <div className="App">
        <div className="container">
          <LoggedOut>
            {imagen()}
            <h2>Iniciar sesión</h2>
            <AuthButton className="SubmitButton" popup={popUri} login="Identificate" logout="Desconectar" />
          </LoggedOut>
          <LoggedIn>
          <Welcome />
            <Map />
            
            <AuthButton className="SubmitButton" popup={popUri} login="Identificate" logout="Desconectar" />
          
            <button onClick = {crearArchivo}>Prueba crear archivo</button>
            
          </LoggedIn>
          
        </div>
      </div>
    );
    }
}

export default observer(Main);
