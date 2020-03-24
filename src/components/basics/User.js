import React from "react";
import { useWebId } from "@solid/react";
import file_client from "solid-file-client";
import auth from "solid-auth-client";
import ReactFileReader from "react-file-reader";

export class UploadButton extends React.Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      //Aqui habria que parsear el archivo y mostrarlo en el mapa
      //alert(reader.result)
      
      let fc = new file_client(auth);
      let url = "https://" +  + ".solid.community/public/rutas/prueba1.json" ;
      console.log(url);
      fc.createFile(url, reader.result, "text/turtle");
      
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

export const User = props => {
    let webId = useWebId();
    let username = split();

    class UploadButton extends React.Component {
      handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function (e) {
          // Use reader.result
          //Aqui habria que parsear el archivo y mostrarlo en el mapa
          //alert(reader.result)
          
          let fc = new file_client(auth);
          let url = "https://" + username + ".solid.community/public/rutas/prueba1.geojson" ;
          console.log(url);
          fc.createFile(url, reader.result, "text/turtle");
          
        }
        reader.readAsText(files[0]);
      }
    
      render() {
        return (
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.geojson'}>
                <button className="btn">Upload</button>
            </ReactFileReader>
        );
      }
    }

    function split() {
        let username = String(webId);
        username = username.replace("https://", "");
        username = username.replace(".solid.community/profile/card#me", "");
        return username;
    }

    return (
        <section>
            <div className="col-sm">
                <span>Estas logueado como: <a href={webId}>{split()}</a></span>
            </div>
            <UploadButton/>
        </section>
    );
}

export default { User, UploadButton };