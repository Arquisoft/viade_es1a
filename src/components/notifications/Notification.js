import React from "react";
import campanita from "../../static/images/campanita.png";
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import properties from "../commons/Properties";
import Button from "../basics/BasicButton";
import { useWebId } from "@solid/react";
import "../../static/css/Main.css";
import I from "../commons/Internationalization";





async function getNNotifications() {
    const auth = require("solid-auth-client");
    const FC = require("solid-file-client");
    const fc = new FC(auth);
    let session = await auth.currentSession();
    let session2 = "https://kevin23699.solid.community/profile/card#me"
    let profile="";
    let profileDocument="";
    if (session == null) {
         profileDocument = await fetchDocument(session2);
         profile = profileDocument.getSubject(session2);
    }
    else {
         profileDocument = await fetchDocument(session.webId);
         profile = profileDocument.getSubject(session.webId);
    }
    const storage = profile.getRef(space.storage);


    let folder;
    await fc.readFolder(storage + properties.inbox)
        .then((content) => { folder = content; })
        .catch((err) => (folder = null));
    let result = 0;
    if (folder) {
        result = folder.files.length;
    }
    return result;
}

const NotificationHook = () => {

    let webid = String(String(useWebId()).replace(properties.profile, properties.inbox));

    class Notification extends React.Component {

        _isMounted = false;

        constructor(props) {
            super(props);
            this.state = {
                nNotifications: "",
                inboxUrl: webid
            };
        }

        componentDidMount() {
            this._isMounted = true;
            this.updateNotifications();
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        async updateNotifications() {
            var num = String(await getNNotifications());
            if (this._isMounted) {
                this.setState({
                    nNotifications: num,
                });
            }
        }


        render() {
            return (
                <div className = "notification">
                    <img  data-testid="imgnoti" src={campanita} className="Campanita-ico" alt="ico" />
                    <a data-testid="not" href={this.state.inboxUrl}>{I.Option.Notificaciones}</a>: {this.state.nNotifications}
                    {/* <Button
                        text = "text"
                        class="icon-refresh"
                        data-testid="btnoti"
                        disabled={false}
                        onClick={() => this.updateNotifications()}
                        testid="btNot"
                    /> */}
                    <button type="button" class="btn btn-refresh" aria-label="Left Align">
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                    </button>
                    
                </div>
            );
        }
    }

    return (<Notification />);
};

export default NotificationHook;