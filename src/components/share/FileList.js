import React from "react";
import Button from "../basics/BasicButton";
import properties from "../commons/Properties";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";
import { setUpdateList2 } from "../solidPod/UpdateList";

import "../../static/css/Main.css";

const auth = require("solid-auth-client");
const FC = require("solid-file-client");
const fc = new FC(auth);


export async function getFiles() {
  let storage = "";
  await auth.trackSession(session => {
    storage = session.webId.replace(properties.profile, "");
  });
  let folder;
  await fc.readFolder(storage + properties.myFolder)
    .then((content) => { folder = content; })
    .catch((err) => (folder = null));

  if (folder === null) {
    return null;
  }

  return folder.files;
}

export function filesToButtons(files, handleFiles) {
  const buttons = [];

  if (files === null) {
    notification("info", I.Option.Rutas404);
    return;
  }

  for (const [index, value] of files.entries()) {
    buttons.push(
      <div class="btn-list" key={index}>
        <Button
          class="btn btn-light"
          text={value.name}
          disabled={false}
          onClick={() => handleFiles(value.url)}
          id={value.name} />
      </div>
    );
  }
  return buttons;
}

class ListClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lista: (I.Option.Actualizar)
    };
    this.updateList = this.updateList.bind(this);
    setUpdateList2(this.updateList.bind(this));
    this.updateList();
  }

  async updateList() {
    //Obtenemos lista de urls del pod
    let asincFiles = getFiles();

    //Para que espere a que se carguen las urls del pod se usa await
    let files = await asincFiles;

    let filesHtml = <div className="overflow">{filesToButtons(files, this.props.handleFiles)} </div>;

    //Para que se recargue el {this.state.lista} de mas abajo hay que usar la funcion setState
    this.setState({
      lista: filesHtml,
    });
  }

  render() {
    return (
      <div>
        <h3>{I.Option.ListaArchivos}</h3>
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;