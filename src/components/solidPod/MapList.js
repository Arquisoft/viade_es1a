
import React from "react";
import { List } from "@solid/react";
import Name from "../login/NameSplited";
import { useWebId } from "@solid/react";




class ListClass extends React.Component {
    render() {
        return (
            <div>
                <h2>Lista</h2>
                <List src="user.friends"/>
                <p>Fin de lista</p>
            </div>
        );
    }
}

export default ListClass;