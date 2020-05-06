import React from "react";
import Button from "../basics/BasicButton";
import properties from "../commons/Properties";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";
import { setUpdateList1 } from "../solidPod/UpdateList";

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

async function readRoute(handleFiles, URL) {

  let rutaView = null;
  if (fc.itemExists(URL)) {
    rutaView = await fc.readFile(URL);
  }
  var rutaViewStJ = null;
  try {
    rutaViewStJ = JSON.parse(rutaView);
  } catch (error) {
    notification("danger", I.Option.ErrorMapaIncompatible);
    return;
  }

  handleFiles(rutaViewStJ);


}

export function filesToButtons(files, handleFiles) {
  const buttons = [];

  if (files === null) {
    notification("info", I.Option.Rutas404);
    return;
  }

  for (const [index, value] of files.entries()) {
    if (value.name.endsWith(".geojson")) {
      let name = String(String(value.name).replace(".geojson", ""));

      buttons.push(
        <div class="btn-list" key={index}>
          <Button
            class="btn btn-light"
            text={name}
            disabled={false}
            onClick={() => readRoute(handleFiles, value.url)}
            id={name} />
        </div>
      );
    }
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
    setUpdateList1(this.updateList.bind(this));
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

        {/* <Button
          data-testid="btmaplist"

          text={I.Option.Actualizar}
          disabled={false}
          onClick={() => this.updateList()}
        /> */}
        <h2>{I.Option.ListaRutas}</h2>
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;