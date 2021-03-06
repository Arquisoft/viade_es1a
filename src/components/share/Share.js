import React from "react";

import { useWebId } from "@solid/react";
import InputField from "../basics/ImputField";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";
import properties from "../commons/Properties";
import request from "request";
import ShowFriends from "./ShowFriends";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";
import FileList from "./FileList";  



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
                notification("success", I.Option.Enviada);
            } else {
                notification("danger", I.Option.ErrorI);
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
                amigo: "",
                error: ""
            };
        }

        async enviar(amigos) {
            if (!this.state.archivo) {
                notification("warning", I.Option.ErrorArchivoNull);
                return;
            }

            if (amigos.length <= 0) {
                notification("warning", I.Option.ErrorAmigosNull);
                return;
            }

            //let publicRute = String(this.state.archivo).replace(properties.myFolder, "") + properties.shareFolder;
            let publicRute = String(String(this.state.archivo).replace(properties.myFolder, properties.shareFolder));

            //Copiamos el archivo a la carpeta publica
            const fc = new FileClient(auth);
            //console.log("Copiando "+this.state.archivo+" a " +publicRute)

            try {
                await fc.copyFile(this.state.archivo, publicRute);
            } catch (error) {
                console.log(error);
                if (error.status === 403) {
                    notification("danger", I.Option.Error403, I.Option.ErrorPermisos);
                }
                else if (error.status === 404) {
                    notification("danger", I.Option.Error404, I.Option.Archivo404);
                }
                else {
                    notification("danger", I.Option.ErrorI);
                }
                return;
            }


            for (var i = 0; i < amigos.length; ++i) {
                this.state.amigo = amigos[i];

                if (!this.state.amigo) {
                    break;
                }

                let friendInbox = String(this.state.amigo).replace(properties.profile, "/") + properties.inboxSinBarra;

                //Enviamos la notificacion a nuestro amigo
                await sendNotification(userId, friendInbox, publicRute);
                //console.log("Enviando... "+userId+" "+friendInbox+" "+publicRute)
            }

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
        handleFiles(val) {
            this.setInputValue("archivo", val);
        }

        render() {
            return (
                <div className="LoginForm">

                    <h2 data-testid="comp">{I.Option.Compartir}</h2>
                    <p data-testid="uri">{I.Option.URI}</p>
                    <InputField
                        type="text"
                        class="form-control"
                        value={this.state.archivo ? this.state.archivo : ""}
                        onChange={(val) => this.setInputValue("archivo", val)}
                        data-testid="input"

                    />
                    <FileList handleFiles={this.handleFiles.bind(this)} />
                    <ShowFriends src="user.friends" enviar={this.enviar.bind(this)} />

                    {this.state.error}


                </div>
            );
        }
    }
    return (<Share />);
};
export default Hook;