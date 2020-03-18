import React from 'react';
import logo from '../assets/images/ViaDe.svg';
import '../assets/css/login.css';
import UserStore from './login/UserStore';
import LoginForm from './login/LoginForm';
import SubmitButton from './login/SubmitButton';
import { observer } from 'mobx-react';
import Map from './map/Map';
import {  AuthButton, LoggedOut, LoggedIn} from '@solid/react';






function Imagen() {
  return (<img src={logo} className="App-logo" alt="logo" />);
}

class Main extends React.Component {

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
      const popUri = 'https://solid.community/common/popup.html'

      return (
        <div className="App">
          <div className="container">
            {Imagen()}
            <LoginForm />

            

            <AuthButton popup={popUri} login="Login here!" logout="Log me out"/>

            <LoggedOut>
              <p>You are not logged in, and this is a members-only area!</p>
            </LoggedOut>
            <LoggedIn>
              <p>You are logged in and can see the special content.</p>
            </LoggedIn>
            <Map />
          </div>
        </div>
      );
    }
  }
}

export default observer(Main);
