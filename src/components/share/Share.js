import React from "react";

import { useWebId } from "@solid/react";
import InputField from "../basics/ImputField";
import Button from "../basics/BasicButton";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";
import properties from "../commons/Properties";
import request from "request";

async function sendNotification(userWebId, friendWebId, fileId) {
    request({
        method: "POST",
        uri: friendWebId,
        body: `@prefix as: <https://www.w3.org/ns/activitystreams#> .
            @prefix schema: <http://schema.org/> .
            <> a as:Follow ;
            schema:Action "shareRoute" ;
            schema:agent <${userWebId}> ;
            schema:identifier "${fileId}" .`,
        headers: {
            "Content-Type": "text/turtle"
        }

    },

        function (error, response, body) {
            if (error) { return false } else {
                console.log("Notificacion subida correctamente, el servidor respondio con :", body)
                return true
            }
        })
}

export const Hook = () => {
    //let folderId = String(String(useWebId()).replace(properties.profile, properties.myFolder)); 
    let userId = useWebId();


    class Share extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                archivo: "https://alvatros96.solid.community/private/rutas/prueba5.geojson",
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

            let publicRute = String(String(this.state.archivo).replace(properties.myFolder, properties.shareFolder));
            //Leer archivo

            const fc = new FileClient(auth);
            //let result = false;
            await fc.copy(this.state.archivo, publicRute);
            let friendInbox = String(String(this.state.amigo).replace(properties.profile, properties.friendInbox)); 
            await sendNotification(userId, friendInbox, this.state.archivo);
            alert("Archivo enviado");
            // .then(() => {
            //     result = true
            // })
            // .catch(err => (result = false));

            // if(result){
            //     alert("Enviado " + this.state.archivo + " a " + this.state.amigo);
            // }
            // else{
            //     alert("Error al enviar el archivo.")
            // }

            // let archivoLeido;
            // await fc.readFile(this.state.archivo)
            //     .then(content => archivoLeido = content)
            //     .catch(err => (archivoLeido = null));

            // console.log(archivoLeido)

            // //Guardar archivo



            // let fileName = "Archivo.geojson";
            // let url = webidfriend + fileName;
            // fc.createFile(url, archivoLeido, "text/turtle");



        }

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