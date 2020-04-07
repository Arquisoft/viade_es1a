import React from "react";

import { useWebId } from "@solid/react";
import InputField from "../basics/ImputField";
import Button from "../basics/BasicButton";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";

export const Hook = () => {
    let webid = String(String(useWebId()).replace("/profile/card#me", "/public/rutas/"));


    class Share extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                archivo: "https://samuelmorenov.solid.community/public/rutas/prueba5.geojson",
                amigo: "https://samuelmorenov.solid.community/profile/card#me",
                //archivo: webid,
                //amigo: ""
            };
        }

        async enviar() {
            if (!this.state.archivo) {
                return;
            }
            if (!this.state.amigo) {
                return;
            }

            //Leer archivo

            const auth = require("solid-auth-client");
            const FC = require("solid-file-client");
            const fc = new FC(auth);

            let archivoLeido;
            await fc.readFile(this.state.archivo)
                .then(content => archivoLeido = content)
                .catch(err => (archivoLeido = null));

            console.log(archivoLeido)

            //Guardar archivo
            let webidfriend = String(String(this.state.amigo).replace("/profile/card#me", "/public/rutasCompartidas/"));




            

            alert("Enviado " + this.state.archivo + " a " + this.state.amigo);
        }

        // handleFiles = (files) => {
        //     let webid = String(String(useWebId()).replace("/profile/card#me", "/public/rutas/"));

        //     var reader = new FileReader();

        //     reader.onload = function () {
        //         let fc = new FileClient(auth);
        //         let fileName = files[0].name;
        //         let url = webid + fileName;
        //         fc.createFile(url, reader.result, "text/turtle");
        //         alert("Archivo subido a rutas/" + fileName);
        //     };
        //     reader.readAsText(files[0]);
        // };

        // getFiles() {
        //     let session = await auth.currentSession();

        //     const profileDocument = await fetchDocument(session.webId);
        //     const profile = profileDocument.getSubject(session.webId);

        //     const storage = profile.getRef(space.storage);

        //     let folder;
        //     await fc.readFolder(storage + "public/rutas/")
        //       .then(content => { folder = content; })
        //       .catch(err => (folder = null));

        //     var filesObtained = [];
        //     if (folder) {
        //       for (var i = 0; i < folder.files.length; i++) {
        //         let ruta = folder.files[i];
        //         if (ruta != null)
        //           filesObtained = [...filesObtained, ruta];
        //       }
        //     }
        //     return filesObtained;
        //   }

        setInputValue(property, val) {
            val = val.trim();
            this.setState({
                [property]: val
            });
        }

        handleChange(e) {
            this.setState({
                amigo: e.target.value
            });
        }

        render() {
            return (
                <div className="LoginForm">

                    <h2>Compartir ruta</h2>
                    <p>Introducir URI del archivo:</p>
                    <InputField
                        type="text"
                        value={this.state.archivo ? this.state.archivo : ""}
                        onChange={(val) => this.setInputValue("archivo", val)}
                    />
                    <p>Introducir WebId del amigo:</p>
                    <InputField
                        type="text"
                        placeholder="https://ejemplo.solid.community/profile/card#me"
                        value={this.state.amigo ? this.state.amigo : ""}
                        onChange={(val) => this.setInputValue("amigo", val)}
                    />

                    <Button
                        class="btn"
                        text="Enviar"
                        disabled={false}
                        onClick={() => this.enviar()}
                    />

                </div>
            );
        }
    };
    return (<Share />);
}
export default Hook;