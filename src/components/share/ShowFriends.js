import React from 'react';
import { useLDflexList } from "@solid/react";
import Button from "../basics/BasicButton";

function getMarcados() {
    var checkedValue = null;
    var inputElements = document.getElementsByName("friendbox");
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            break;
        }
    }
    return checkedValue;
}

function ShowFriends({ src, enviar }) {
    let container = items => (
        <div>
            {items}
            <Button
                class="btn"
                text="Enviar a amigos"
                disabled={false}
                onClick={() => enviar(getMarcados())}
            />
        </div>
    );
    let children = (item, index) => (
        <div key={index}>
            <input type="radio" name="friendbox" value={`${item}`} />
            <label> {`${item}`} </label>
        </div>
    );

    const items = useLDflexList(src)
        .filter(() => true)
        .slice(0, Infinity)
        .map(children);
    return container ? container(items) : items;
}

export default ShowFriends