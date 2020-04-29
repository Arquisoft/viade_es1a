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
    await fc.readFolder(storage + properties.inbox)
        .then((content) => { folder = content; })
        .catch((err) => (folder = null));
    let result = 0;
    if (folder) {
        result = folder.files.length;
    }
    return result;
}

function ShowFriends({ src, enviar }) {
    const { t } = useTranslation();

    let container = (items, grupos) => (
        <div>
            <p>Seleccione amigos y grupos</p>
            {items}
            {grupos}
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

    let grupos = () => {

    };

    const items = useLDflexList(src)
        .filter(() => true)
        .slice(0, Infinity)
        .map(children);
        
    return container ? container(items, grupos) : items;
}

export default ShowFriends;