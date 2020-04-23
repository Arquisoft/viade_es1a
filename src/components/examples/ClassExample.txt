import React from "react";

function funcionExterna() {
    return 0;
}

const constanteExterna = 1;

class ClassExample extends React.Component {

    funcionInterna() {
        this.constanteInterna = constanteExterna;
        funcionExterna();
    }


  render() {
    return (
      <div>
        {this.funcionInterna()}
      </div>
    );
  }
}

export default ClassExample;
