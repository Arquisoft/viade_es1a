import React from "react";
import file_client from "solid-file-client";
import auth from "solid-auth-client";
import ReactFileReader from "react-file-reader";
import NameSplited from "../login/NameSplited";

export const UploadHook = () => {
    let nameSplited = NameSplited();

    class UploadToPod extends React.Component {

        handleFiles = files => {
            var reader = new FileReader();
            reader.onload = function () {
                let fc = new file_client(auth);
                let fileName = files[0].name;
                let url = "https://" + nameSplited + ".solid.community/public/rutas/"+fileName;
                fc.createFile(url, reader.result, "text/turtle");
                alert("Archivo subido a rutas/"+fileName)
            }
            reader.readAsText(files[0]);
        }

        render() {
            return (
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.geojson'}>
                    <button className="btn">Subir Json a Solid</button>
                </ReactFileReader>
            );
        }
    }
    return (<UploadToPod />);
}

export default UploadHook;