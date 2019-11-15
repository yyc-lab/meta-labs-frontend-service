import React from 'react';
import logo from './lhl_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A place for collaboration, learning, and innovation. Bring your ideas to life.
        </p>
        <a
          className="App-link"
          href="https://github.com/yyc-lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to YYC Labs
        </a>
      </header>
    </div>
  );
}

export default App;
