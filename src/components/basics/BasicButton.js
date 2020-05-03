import React from "react";
import { Button } from "react-bootstrap";

class SubmitButton extends React.Component {
  render() {
    return (
        <Button
          className= {this.props.class}
          disabled={this.props.disabled}
          onClick={ () => this.props.onClick() }
        >
          {this.props.text}
        </Button>
    );
  }
}

export default SubmitButton;