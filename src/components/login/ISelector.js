import React from "react";
import I from "../commons/Internationalization";

class ISelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "es"
        };
    }

    async setInputValue() {
        var select = document.getElementById("select_languaje");
        var val = select.value;

        I.change(val, this.props.update)
        this.setState({
            selected: val
        });
    }

    render() {
        return (
            <select id="select_languaje" onChange={() => this.setInputValue()}>
                <option value="es"> {I.Option.SP}</option>
                <option value="en">{I.Option.EN}</option>
            </select>
        );
    }
}

export default ISelector;