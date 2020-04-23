import React from "react";
import ShowFriends from "./ShowFriends";

export const Hook = () => {

    class Groups extends React.Component {
        crearGrupo(){
            alert("Grupo creado");
        }

        render() {
            return (
                <div>
                   <ShowFriends src="user.friends" enviar={this.crearGrupo.bind(this)} />
                </div>
            );
        }
    }
    return (<Groups />);
};

export default Hook;