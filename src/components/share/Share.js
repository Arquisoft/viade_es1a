import React from "react";

import { useWebId } from "@solid/react";
import InputField from "../basics/ImputField";
import Button from "../basics/BasicButton";
//import ShowFriends from "./ShowFriends";


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
            // if (val.length > 12) {
            //     return;
            // }
            this.setState({
                [property]: val
            });
        }

        getFriends() {
            return (
                <select onChange={(val) => this.setInputValue("amigo", val)} id="cars">
                    <option value="amigo5">amigo 1</option>
                    <option value="amigo5">amigo 2</option>
                    <option value="amigo5">amigo 3</option>
                    <option value="amigo5">amigo 4</option>
                    <option value="amigo5">amigo 5</option>
                </select>
            );
        }

        render() {
            return (
                <div className="LoginForm">

                    <h2>Compartir ruta</h2>
                    <p>Introducir URI del archivo</p>
                    <InputField
                        type="text"
                        value={this.state.archivo ? this.state.archivo : ""}
                        onChange={(val) => this.setInputValue("archivo", val)}
                    />
                    <p>Introducir webID del amigo</p>
                    <InputField
                        type="text"
                        value={this.state.amigo ? this.state.amigo : ""}
                        onChange={(val) => this.setInputValue("amigo", val)}
                    />

                    {this.getFriends()}

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