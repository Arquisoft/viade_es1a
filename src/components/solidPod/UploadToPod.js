import React from "react";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";
import ReactFileReader from "react-file-reader";
import { useWebId } from "@solid/react";
import properties from "../commons/Properties";
import { Button } from "react-bootstrap";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";
import { funtionUpdateList } from "../solidPod/UpdateList";

export const UploadHook = () => {
    let webid = String(String(useWebId()).replace(properties.profile, properties.myFolder));


    class UploadToPod extends React.Component {

        handleFiles = (files) => {
            var reader = new FileReader();
            reader.onload = async function () {
                let fc = new FileClient(auth);
                let fileName = files[0].name;
                let url = webid + fileName;
                await fc.createFile(url, reader.result, "text/turtle");
                notification("success", I.Option.ArchivoSubido, I.Option.ArchivoSubidoa + properties.myFolder + fileName);
                await funtionUpdateList();
                console.log("He pasao por aqui")
            };
            reader.readAsText(files[0]);



        };

        render() {
            return (
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={".geojson"}>
                    <Button data-testid="subirjson">{I.Option.Subir}</Button>
                </ReactFileReader>
            );
        }
    }
    return (<UploadToPod />);
};

export default UploadHook;