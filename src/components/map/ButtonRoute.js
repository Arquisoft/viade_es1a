
import React from "react";
import Button from "../basics/BasicButton";
import { handleFiles } from "./Map";
const Json = require("./GetJSON");


class ClassExample extends React.Component {

    render() {
        return (
            <div>
                <Button
                    class="btn"
                    text="Mostrar Json en el Mapa"
                    disabled={false}
                    onClick={() => handleFiles(this.props.mapa, Json)} />
            </div>
        );
    }
}

export default ClassExample;

