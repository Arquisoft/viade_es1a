
import React from "react";
import Button from "../basics/BasicButton";
import { handleFilesExterno } from "./Map";
const Json = require("./GetJSON");


class ButtonRoute extends React.Component {

    render() {
        return (
            <div>
                <Button
                    class="btn"
                    text="Mostrar Json en el Mapa"
                    disabled={false}
                    onClick={() => handleFilesExterno(this.props.map, Json)} />
            </div>
        );
    }
}

export default ButtonRoute;
