import React from 'react';

export default class Owner extends React.Component {
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
      console.log("Si es el caso")
    }
    else{
        console.log("No es el caso")
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