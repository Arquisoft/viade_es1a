import React from "react";
import { useLDflexList } from "@solid/react";
import Button from "../basics/BasicButton";

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

function ShowFriends({ src, enviar }) {
    let container = (items) => (
        <div>
            <p>Seleccione amigos:</p>
            {items}
            {/* {console.log(items!=null)} TODO: Comprobar que hay amigos*/}
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
            <input type="checkbox" name="friendbox" value={`${item}`} />
            <label> {`${item}`} </label>
        </div>
    );

    const items = useLDflexList(src)
        .filter(() => true)
        .slice(0, Infinity)
        .map(children);
    return container ? container(items) : items;
}

export default ShowFriends;