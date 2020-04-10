import React from "react";

class ImputField extends React.Component {
  render() {
    return (
      <div className="ImputField">
        <input
          className="input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
          data-testid="input"
        />
      </div>
    );
  }
}

export default ImputField;