import React from "react";
import Button from "../basics/BasicButton"
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";

const auth = require("solid-auth-client");
const FC = require("solid-file-client");
const fc = new FC(auth);

export async function listRoutes() {
  let session = await auth.currentSession();

  const profileDocument = await fetchDocument(session.webId);
  const profile = profileDocument.getSubject(session.webId);

  const storage = profile.getRef(space.storage);

  let folder;
  await fc.readFolder(storage + "public/rutas/")
    .then(content => { folder = content; })
    .catch(err => (folder = null));

  var result = [];
  if (folder) {
    for (var i = 0; i < folder.files.length; i++) {
      console.log(folder.files[i].url);
      let ruta = folder.files[i].url;
      if (ruta != null)
        result = [...result, ruta];
    }
  }

  alert(result);
  return result;
}

class ListClass extends React.Component {
  render() {
    return (
      <div>
        <Button
          class="btn"
          text="Lista Rutas"
          disabled={false}
          onClick={() => listRoutes()}
        />
      </div>
    );
  }
}

export default ListClass;