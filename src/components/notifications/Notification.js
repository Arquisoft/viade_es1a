import React from "react";
import campanita from "../../static/images/campanita.png";
import properties from "../commons/Properties";
import Button from "../basics/BasicButton";
import { useWebId } from "@solid/react";
import "../../static/css/Main.css";
import I from "../commons/Internationalization";

async function getNNotifications() {
    const auth = require("solid-auth-client");
    const FC = require("solid-file-client");
    const fc = new FC(auth);

    let storage = "";
    await auth.trackSession(session => {
        if (session)
            storage = session.webId;
    });

    storage = storage.replace(properties.profile, properties.inbox);
    let folder;

    await fc.readFolder(storage)
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
                <div className="notification">
                    <img data-testid="imgnoti" src={campanita} className="Campanita-ico" alt="ico" />
                    <a data-testid="not" href={this.state.inboxUrl}>{I.Option.Notificaciones}</a>  <span className="badge">{this.state.nNotifications}</span>
                    <Button
                        text={I.Option.Refrescar}
                        class="icon-refresh"
                        data-testid="btnoti"
                        disabled={false}
                        onClick={() => this.updateNotifications()}
                        testid="btNot"
                    />

                </div>
            );
        }
    }

    return (<Notification />);
};

export default NotificationHook;