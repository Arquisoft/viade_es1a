import React from "react";

class ShowFriends extends React.Component {
  render() {
    return (
      <div>
        <h2>Lista de amigos</h2>
        <div className="overflow">
          <button className="btn btn-list">amigo 1</button>
          <button className="btn btn-list">amigo 2</button>
          <button className="btn btn-list">amigo 3</button>
          <button className="btn btn-list">amigo 4</button>
          <button className="btn btn-list">amigo 5</button>
        </div>
      </div>
    );
  }
}

export default ShowFriends;