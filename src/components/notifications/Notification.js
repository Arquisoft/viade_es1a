import React from "react";
import campanita from "../../static/images/campanita.png";
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import properties from "../commons/Properties";




async function getNNotifications() {
    const auth = require("solid-auth-client");
    const FC = require("solid-file-client");
    const fc = new FC(auth);

    let session = await auth.currentSession();

    const profileDocument = await fetchDocument(session.webId);
    const profile = profileDocument.getSubject(session.webId);

    const storage = profile.getRef(space.storage);

    let folder;
    await fc.readFolder(storage + properties.inbox)
        .then(content => { folder = content; })
        .catch(err => (folder = null));


    return folder.files.length;
}

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nNotifications: 0,
            inboxUrl: "https://ejemplo.solid.community/inbox/"
        };
      }

    render() {
        return (
            <p>
                <img src={campanita} className="Campanita-ico" alt="ico" />
                <a href={this.state.inboxUrl}>Notificaciones recibidas</a>: {this.state.nNotifications}
            </p>
        );
    }
}

export default Notification;