import React from "react";
import { useWebId } from "@solid/react";
import file_client from "solid-file-client";
import auth from "solid-auth-client";

export const User = props => {
    let webId = useWebId();
    let username = split();

    function split() {
        let username = String(webId);
        username = username.replace("https://", "");
        username = username.replace(".solid.community/profile/card#me", "");
        return username;
    }

    function crearArchivo() {
        let fc = new file_client(auth);
        let url = "https://" + username + ".solid.community/public/rutas/ruta1.json";
        fc.createFile(url, "prueba", "text/turtle");
    }
    
    return (
        <section>
            <div className="col-sm">
                <span>Estas logueado como: <a href={webId}>{split()}</a></span>
            </div>
            <button className="btn" onClick={crearArchivo}>Prueba crear archivo</button>
        </section>
    );
}


export default User;