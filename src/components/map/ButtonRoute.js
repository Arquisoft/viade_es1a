
import React from "react";
import Button from "../basics/BasicButton";
const Json = require("./GetJSON");

class ClassExample extends React.Component {

    render() {
        return (
            <div>
                <Button
                    class="btn"
                    text="Mostrar Json en el Mapa"
                    disabled={false}
                    onClick={() => this.handleFiles(Json)} />
            </div>
        );
    }
}

export default ClassExample;

