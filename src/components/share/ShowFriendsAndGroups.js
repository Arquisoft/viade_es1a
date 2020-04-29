import React from "react";
import { useLDflexList } from "@solid/react";
import Button from "../basics/BasicButton";
import { useTranslation } from 'react-i18next';
import { fetchDocument } from "tripledoc";
import { space } from "rdf-namespaces";
import properties from "../commons/Properties";

function getMarcados() {
    var checkedValue = [];
    var indice = 0;
    var inputElements = document.getElementsByName("friendbox");
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue[indice] = inputElements[i].value;
            ++indice;
        }
    }
    return checkedValue;
}

//Esto devuelve una lista de archivos de properties.groupFolder
async function getGroups() {
    const auth = require("solid-auth-client");
    const FC = require("solid-file-client");
    const fc = new FC(auth);
    let session = await auth.currentSession();
    let profile = "";
    let profileDocument = "";

    profileDocument = await fetchDocument(session.webId);
    profile = profileDocument.getSubject(session.webId);

    const storage = profile.getRef(space.storage);


    let folder;
    await fc.readFolder(storage + properties.groupFolder)
        .then((content) => { folder = content; })
        .catch((err) => (folder = null));


    return folder.files;
}

function getGroupsList() {
    //let asincFiles = getGroups();
    //let files = asincFiles;
    let checks = [];

    checks.push(
        <p>Grupos:</p>
    );

    // for (const [index, value] of files.entries()) {
    //     let item = ":D";//value.nombreGrupo;
    //     checks.push(
    //         <div key={index}>
    //             <input type="checkbox" name="groupbox" value={`${item}`} />
    //             <label> {`${item}`} </label>
    //         </div>
    //     );
    // }

    return checks;

}


function ShowFriends({ src, enviar }) {
    const { t } = useTranslation();

    let container = (items, grupos) => (
        <div>
            <p>Seleccione amigos y grupos</p>
            {items}
            {getGroupsList()}
            {/* {console.log(items!=null)} TODO: Comprobar que hay amigos*/}
            <Button
                class="btn"
                text={t('Enviar.1')}
                disabled={false}
                onClick={() => enviar(getMarcados())}
            />
        </div>
    );
    let children = (item, index) => (
        <div key={index}>
            <input type="checkbox" name="friendbox" value={`${item}`} />
            <label> {`${item}`} </label>
        </div>
    );

    const items = useLDflexList(src)
        .filter(() => true)
        .slice(0, Infinity)
        .map(children);

    return container(items);
}

export default ShowFriends;