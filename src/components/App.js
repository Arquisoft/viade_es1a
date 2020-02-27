import React from 'react';
import logo from '../assets/images/ViaDe.svg';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Viade es1a</h1>
        <p>En desarollo, para más información visita nuestro <a
            className="App-link"
            href="https://github.com/Arquisoft/viade_es1a"
            target="_blank"
            rel="noopener noreferrer"
          >proyecto en github</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
