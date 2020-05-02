import React from "react";
import Button from "../basics/BasicButton";
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import properties from "../commons/Properties";

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
  await fc.readFolder(storage + properties.myFolder)
    .then((content) => { folder = content; })
    .catch((err) => (folder = null));
  return folder.files;
}

async function readRoute(handleFiles, URL) {

  let rutaView = null;
  if(fc.itemExists(URL)){
    rutaView = await fc.readFile(URL);
  }

  var rutaViewStJ = JSON.parse(rutaView);

  handleFiles(rutaViewStJ);

}

export function filesToButtons(files, handleFiles) {
  const buttons = [];
  for (const [index, value] of files.entries()) {
    buttons.push(
      <div class="btn-list" key={index}>
        <Button
          class="btn btn-list"
          text={value.name}
          disabled={false}
          onClick={() => readRoute(handleFiles, value.url)} 
          id={value.name}/>
      </div>
    );
  }
  return buttons;
}

class ListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: (<p>Actualice la lista</p>)
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
          text="Actualizar lista"
          disabled={false}
          onClick={() => this.updateList()} 
          />
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;