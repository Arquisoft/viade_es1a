import React from "react";
import { useWebId } from "@solid/react";
//import "./Welcome.css";

export const User = props => {
    let webId = useWebId();
    
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
        </section>
    );
}

export default User;