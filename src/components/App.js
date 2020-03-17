import React from 'react';
import logo from '../assets/images/ViaDe.svg';
import '../assets/css/login.css';
import UserStore from './login/UserStore';
import LoginForm from './login/LoginForm';
import SubmitButton from './login/SubmitButton';
import { observer } from 'mobx-react';

function Imagen() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}

class App extends React.Component {

  async componentDidMount() {
    try {
      let res = await fetch('./isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.sucess) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch('./logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.sucess) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  render() {
    if (UserStore.loading) {
      return (
        <div className="App">
          <div className="container">
            Cargando, espere...
          </div>
        </div>
      );
    }
    else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="App">
            <div className="container">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              Bienvenido {UserStore.username}

              <SubmitButton
                text={'Desconectar'}
                desabled={false}
                onClick={() => this.doLogout}
              />
            </div>
          </div>
        );
      }
      return (
        <div className="App">
          <div className="container">
            {Imagen()}
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default observer(App);
