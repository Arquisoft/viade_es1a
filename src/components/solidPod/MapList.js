import React from 'react';
import Button from "../basics/BasicButton";
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import properties from "../commons/Properties";
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

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

  var rutaViewStJ = JSON.parse(rutaView);

  handleFiles(rutaViewStJ);

}

export function filesToButtons(files, handleFiles) {
  const buttons = [];

  if (files === null) {
    return <Redirect to="/404" />;
  }

  for (const [index, value] of files.entries()) {
    buttons.push(
      <div class="btn-list" key={index}>
        <Button
          class="btn btn-list"
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
    const Actualizar = () => {
      const { t } = useTranslation();

      return (<p>{t('Actualizar.1')}</p>);
    };
    super(props);
    this.state = {
      lista: (<Actualizar></Actualizar>)
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

    const Actualizar = () => {
      const { t } = useTranslation();

      return (<div data-testid="act">{t('Actualizar.1')}</div>);
    };

    return (
      <div>

        <Button
          class="btn"
          text={<Actualizar></Actualizar>}
          disabled={false}
          onClick={() => this.updateList()}
        />
        {this.state.lista}
      </div>
    );
  }
}

export default ListClass;