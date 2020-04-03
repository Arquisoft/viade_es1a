
import React from "react";
import Button from "../basics/BasicButton";
import { handleFiles } from "./Map";
const Json = require("./GetJSON");


class ButtonRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mapa: this.props.map
        };
    }

    render() {
        return (
            <div>
                {/* <Button
                    class="btn"
                    text="Mostrar Json en el Mapa"
                    disabled={false}
                    onClick={() => ;} /> */}
            </div>
        );
    }
}

export default ButtonRoute;

