import React from "react";

class ShowFriends extends React.Component {
  render() {
    return (
      <div>
        <h2>Lista de amigos</h2>
        <select id="cars">
          <option value="amigo1">amigo 1</option>
          <option value="amigo2">amigo 2</option>
          <option value="amigo3">amigo 3</option>
          <option value="amigo4">amigo 4</option>
          <option value="amigo5">amigo 5</option>
        </select>
      </div>
    );
  }
}

export default ShowFriends;