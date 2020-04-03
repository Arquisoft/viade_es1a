import React from "react";
import Button from "../basics/BasicButton"
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
const rutaH = require("../map/GetJSON");

const auth = require("solid-auth-client");
const FC = require("solid-file-client");
const fc = new FC(auth);

const Json = require("../map/GetJSON");

export async function getFiles() {
  let session = await auth.currentSession();

  const profileDocument = await fetchDocument(session.webId);
  const profile = profileDocument.getSubject(session.webId);

  const storage = profile.getRef(space.storage);

  let folder;
  await fc.readFolder(storage + "public/rutas/")
    .then(content => { folder = content; })
    .catch(err => (folder = null));

  var filesObtained = [];
  if (folder) {
    for (var i = 0; i < folder.files.length; i++) {
      let ruta = folder.files[i];
      if (ruta != null)
        filesObtained = [...filesObtained, ruta];
    }
  }
  return filesObtained;
}

async function readRoute(handleFiles, URL){

  let rutaView;
    await fc.readFile(URL)
    .then(content => rutaView = content)
    .catch(err => (rutaView = null));

    var rutaViewStJ = JSON.parse(rutaView);

  //alert(rutaViewS);
  //console.log(rutaViewS);
  handleFiles(rutaViewStJ);
  
}

export function filesToButtons(files, handleFiles) {
  const buttons = [];
  for (const [index, value] of files.entries()) {


    buttons.push(
      <div key={index}>
        <Button
          class="btn"
          text={value.name}
          disabled={false}
          onClick={() => readRoute(handleFiles, value.url)} />
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

    let filesHtml = filesToButtons(files, this.props.handleFiles);

    //Para que se recargue el {this.state.lista} de mas abajo hay que usar la funcion setState
    this.setState({
      lista: filesHtml,
    });
  }

  render() {
    return (
      <div>
        <Button
          class="btn"
          text="Actualizar lista"
          disabled={false}
          onClick={() => this.updateList()} />
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;