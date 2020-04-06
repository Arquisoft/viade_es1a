import React from "react";

class ShowFriends extends React.Component {
  render() {
    return (
      <div>
        <h2>Lista de amigos</h2>
        <select id="cars">
          <option value="amigo 5">amigo 1</option>
          <option value="amigo 5">amigo 2</option>
          <option value="amigo 5">amigo 3</option>
          <option value="amigo 5">amigo 4</option>
          <option value="amigo 5">amigo 5</option>
        </select>
      </div>
    );
  }
}

export default ShowFriends;