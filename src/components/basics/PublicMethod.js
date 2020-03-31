import React from 'react';

export class Owner extends React.Component {
  receiveExposedMethod(exposedMethod) {
    this.exposedMethod = exposedMethod;
  }
  exposedMethod(){}
  render() {
    return (
      <div>
        <button onClick={this.exposedMethod}>Call Exposed Method</button>
        <Child getExposedMethod={this.receiveExposedMethod.bind(this)}/>
      </div>
    );
  }
}

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
  }
  componentDidMount() {
    if (typeof this.props.getExposedMethod === 'function') {
      this.props.getExposedMethod(this.exposedMethod.bind(this));
    }
  }
  exposedMethod() {
    this.setState({
      text: 'YOYOYO'
    });
  }
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}