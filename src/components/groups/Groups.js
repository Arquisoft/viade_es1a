import React from "react";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";
import ShowFriends from "./ShowFriends";
import { useWebId } from "@solid/react";
import properties from "../commons/Properties";
import InputField from "../basics/ImputField";

export const Hook = () => {

    let folderId = String(String(useWebId()).replace(properties.profile, properties.groupFolder));
    //let userId = useWebId();

    class Groups extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                archivo: folderId,
                nombreGrupo: "",
                amigo: "",
                fileContent: ""
            };
        }

        async crearGrupo(amigos) {
            if (!this.state.archivo) {
                return;
            }

            if (amigos.length <= 0) {
                return;
            }

            if(this.state.nombreGrupo.length <= 0){
                return;
            }


            //console.log("Creado grupo " + this.state.nombreGrupo + " de ");
            //--------Creacion del archivo .json para grupos----------
            const c = "\"";
            this.state.fileContent = "{" + "\n" + c + "nombreGrupo" + c + ":" + c + this.state.nombreGrupo + c +"," +"\n";
            this.state.fileContent += c + "arrayAmigos" + c + ":[";

            for (var i = 0; i < amigos.length; ++i) {
                
                this.state.amigo = amigos[i];

                if (!this.state.amigo) {
                    break;
                }

                this.state.fileContent += "{\n" + 
                    c + "uriAmigo" + c + ":" + c + this.state.amigo + c +
                "\n}";
                    if(i<amigos.length-1){
                        this.state.fileContent += ",";
                    }



                //console.log(this.state.amigo)

            }
            this.state.fileContent += "]\n}" ;

            //-----------------

            let fc = new FileClient(auth);
            let fileName = this.state.nombreGrupo + ".json";
            let url = this.state.archivo+fileName;


            console.log("URL: "+url + " contenido: "+ this.state.fileContent)


            fc.createFile(url, this.state.fileContent, "text/turtle");
            alert("Archivo subido a "+properties.groupFolder+this.state.nombreGrupo);

            
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

                    <p>Amigos</p>
                    <ShowFriends src="user.friends" enviar={this.crearGrupo.bind(this)} />
                </div>
            );
        }
    }
    return (<Groups />);
};

export default Hook;