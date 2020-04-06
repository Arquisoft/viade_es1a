import React from "react";

import Button from "../basics/BasicButton";

class Share extends React.Component {

    compartir(){
        console.log("Compartiendo...");
    }

  render() {
    return (
      <div>
          <h2>Compartir ruta</h2>
          <p>URI de la ruta o archivo a compartir:</p>
          <input></input>
          <p>WebID del amigo con quien compartirla:</p>
          <input></input>
          <Button
                    class="btn"
                    text="Compartir"
                    disabled={false}
                    onClick={() => this.compartir()}
                />

      </div>
    );
  }
}

export default Share;