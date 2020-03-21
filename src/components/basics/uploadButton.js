import React from "react";
import { useWebId } from "@solid/react";
import file_client from "solid-file-client";
import auth from "solid-auth-client";

import ReactFileReader from "react-file-reader";

function crearArchivo(WebId) {
  console.log(WebId);
  let fc = new file_client(auth);
  let url = "https://adrifa13.solid.community/rutas/ruta1.json";
  fc.createFile(url, "prueba", "text/turtle");
}

const User = props => {
  let webId = useWebId();
  
  function split() {
      let username = String(webId);
      username = username.replace("https://", "");
      username = username.replace(".solid.community/profile/card#me", "");
      return username;
  }
  
  return split();
}

// function refreshPage() {
//   window.location.reload(false);
// }

export default class UploadButton extends React.Component {
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
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.*'}>
            <button className="btn">Upload</button>
        </ReactFileReader>
    );
  }
}
