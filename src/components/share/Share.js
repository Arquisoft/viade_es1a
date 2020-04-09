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
            if (!error) { 
                alert("Notificacion enviada");
            }
            return !error;
        });
}

export const Hook = () => {
    let folderId = String(String(useWebId()).replace(properties.profile, properties.myFolder)); 
    let userId = useWebId();


    class Share extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                archivo: folderId,
                amigo: ""
            };
        }

        async enviar() {
            if (!this.state.archivo){
                return;
            }
            if (!this.state.amigo) {
                return;
            }

            let publicRute = String(String(this.state.archivo).replace(properties.myFolder, properties.shareFolder));
            let friendInbox = String(String(this.state.amigo).replace(properties.profile, properties.inbox));

            //Copiamos el archivo a la carpeta publica
            const fc = new FileClient(auth);
            await fc.copy(this.state.archivo, publicRute);

            //Enviamos la notificacion a nuestro amigo
            await sendNotification(userId, friendInbox, publicRute);
            

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
    }
    return (<Share />);
};
export default Hook;