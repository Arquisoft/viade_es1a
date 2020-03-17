import React from 'react';
import InputField from './ImputField'
import SubmitButton from './SubmitButton';
import UserStore from './UserStore';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
    }
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin(){
    if(!this.state.username){
      return;
    }
    if(!this.state.password){
      return;
    }
    this.setState({
      buttonDisabled: true
    })
    try {
      let res =await fetch('/login',{
        method: 'post',
        headers: {
          'Accept': 'application/jon'
        },
        body: JSON.stringify({
          username: this.state.username,
          password:this.state.password
        })
      });

      let result = await res.json();
      if (result && result.sucess) {
        UserStore.isLoggedIn = true;
        UserStore.username = this.state.username;
      }

      else if (result && result.sucess === false){
        this.resetForm();
        alert(result.msg);
      }
    }
    catch(e){
      console.log(e);
      this.resetForm();
    }
  }

  render() {
    return (
      <div className="LoginForm">
        
        Log In
        <InputField
          type='text'
          placeholder='Username'
          value={this.state.username ? this.state.username : ''}
          onChange={(val) => this.setInputValue('username', val)}
          />

      </div>
    );
  }
}

export default LoginForm;