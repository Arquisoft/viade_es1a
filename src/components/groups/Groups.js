import React from "react";
import ShowFriends from "./ShowFriends";
import { useTranslation } from 'react-i18next';
import { useWebId } from "@solid/react";
import properties from "../commons/Properties";
import InputField from "../basics/ImputField";

export const Hook = () => {

    let folderId = String(String(useWebId()).replace(properties.profile, properties.Groups));
    //let userId = useWebId();

    const { t } = useTranslation();

    class Groups extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                archivo: folderId,
                nombreGrupo: "",
                amigo: ""
            };
        }

        async crearGrupo(amigos) {
            if (!this.state.archivo) {
                return;
            }

            if (amigos.length <= 0) {
                return;
            }


            console.log("Creado grupo "+this.state.nombreGrupo+" de ");

            for (var i = 0; i < amigos.length; ++i) {
                this.state.amigo = amigos[i];

                if (!this.state.amigo) {
                    break;
                }

                console.log(this.state.amigo)

            }



        }

        
        setInputValue(property, val) {
            val = val.trim();
            this.setState({
                [property]: val
            });
        }

        render() {
            return (
                <div>
                    <p>Nombre del grupo</p>
                    <InputField
                        type="text"
                        value={this.state.nombreGrupo ? this.state.nombreGrupo : ""}
                        onChange={(val) => this.setInputValue("nombreGrupo", val)}
                    />

                    <p>{t('Amigos.1')}</p>
                    <ShowFriends src="user.friends" enviar={this.crearGrupo.bind(this)} />
                </div>
            );
        }
    }
    return (<Groups />);
};

export default Hook;