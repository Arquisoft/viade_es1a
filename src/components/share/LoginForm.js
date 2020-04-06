import React from "react";
import InputField from "../basics/ImputField";
import Button from "../basics/BasicButton";


class Share extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      archivo: "http:",
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
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val
    });
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
          type="Amigo"
          value={this.state.amigo ? this.state.amigo : ""}
          onChange={(val) => this.setInputValue("amigo", val)}
        />

        <Button
          class="btn"
          text="Enviar"
          disabled={false}
          onClick={() => this.doLogin()}
        />

      </div>
    );
  }
}

export default Share;