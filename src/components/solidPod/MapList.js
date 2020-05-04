import React from 'react';
import Button from "../basics/BasicButton";
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import properties from "../commons/Properties";
import I from "../commons/Internationalization";
import notification from "../basics/ToastNotification";

import "../../static/css/Main.css"

const auth = require("solid-auth-client");
const FC = require("solid-file-client");
const fc = new FC(auth);


export async function getFiles() {
  let session = await auth.currentSession();

  const profileDocument = await fetchDocument(session.webId);
  const profile = profileDocument.getSubject(session.webId);

  const storage = profile.getRef(space.storage);

  let folder;
  await fc.readFolder(storage + properties.myFolderSinBarra)
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

  try {
    var rutaViewStJ = JSON.parse(rutaView);
  } catch (error) {
    notification("danger", I.Option.ErrorMapaIncompatible);
    return;
  }
  
  handleFiles(rutaViewStJ);

}

export function filesToButtons(files, handleFiles) {
  const buttons = [];

  if (files === null) {
    notification("danger", I.Option.Error404, I.Option.Rutas404);
    return;
  }

  for (const [index, value] of files.entries()) {
    buttons.push(
      <div class="btn-list" key={index}>
        <Button
          class="btn btn-light"
          text={value.name}
          disabled={false}
          onClick={() => readRoute(handleFiles, value.url)}
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

        <Button
          data-testid="btmaplist"

          text={I.Option.Actualizar}
          disabled={false}
          onClick={() => this.updateList()}
        />
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;