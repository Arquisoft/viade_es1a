
import React from "react";
//import { List } from "@solid/react";
//import Name from "../login/NameSplited";
//import { useWebId } from "@solid/react";
import Button from "../basics/BasicButton"

import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
const auth = require("solid-auth-client");

const FC = require("solid-file-client");
const fc = new FC(auth);

export async function readFolder(route)
{
  let folder;
  await fc
    .readFolder(route)
    .then(content => {
      folder = content;
    })
    .catch(err => (folder = null));
    return folder;
}

export async function listRoutes() {
    let session = await auth.currentSession();
  
    const profileDocument = await fetchDocument(session.webId);
    const profile = profileDocument.getSubject(session.webId);
  
    // Get the root URL of the user's Pod:
    const storage = profile.getRef(space.storage);
    var result = [];
  
    //Leemos rutas tanto privadas como publicas
    result=await readRoutes(storage + "public/rutas/");
  
    alert(result);
    return result;
  
  }
  async function readRoutes(folderRoute)
  {
    let folder= await readFolder(folderRoute);
    var result = [];
    if (folder) {
      for (var i = 0; i < folder.files.length; i++) {
        console.log(folder.files[i].url);
        let ruta=folder.files[i].url;
        if(ruta!=null)
          result = [...result, ruta];
        }
      }
    return result;
  }

class ListClass extends React.Component {
    render() {
        return (
            <div>
                <h2>Lista</h2>
                <Button 
                        class="btn"
                        text="Lista Rutas"
                        disabled={false}
                        onClick={() => listRoutes()}/>
                <p>Fin de lista</p>
            </div>
        );
    }
}

export default ListClass;