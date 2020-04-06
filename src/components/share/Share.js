import React from "react";

import { useWebId } from "@solid/react";
import InputField from "../basics/ImputField";
import Button from "../basics/BasicButton";
import ShowFriends from "./ShowFriends";

export const Hook = () => {
    let webid = String(String(useWebId()).replace("/profile/card#me", "/public/rutas/"));
    class Share extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                archivo: webid,
                amigo: ""
            };
        }

        async doLogin() {
            // if (!this.state.archivo) {
            //   return;
            // }
            // if (!this.state.amigo) {
            //   return;
            // }
            alert("Enviando " + this.state.archivo + " a " + this.state.amigo)
        }

        setInputValue(property, val) {
            val = val.trim();
            this.setState({
                [property]: val
            });
            console.log(val)
        }

        handleChange(e) {
            this.setState({
                amigo:e.target.value
            });
        }



        render() {
            return (
                <div className="LoginForm">

                    <h2>Compartir ruta</h2>
                    <p>Introducir URI del archivo:</p>
                    <InputField
                        type="text"
                        value={this.state.archivo ? this.state.archivo : ""}
                        onChange={(val) => this.setInputValue("archivo", val)}
                    />
                    <p>Seleccione el amigo:</p>
                    {ShowFriends(this.handleChange.bind(this))}

                    <Button
                        class="btn"
                        text="Enviar"
                        disabled={false}
                        onClick={() => this.doLogin()}
                    />

                </div>
            );
        }
    };
    return (<Share />);
}
export default Hook;