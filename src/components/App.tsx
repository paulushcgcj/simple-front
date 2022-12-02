import React from 'react';
import { env } from '@main/env';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{env.REACT_APP_MESSAGE}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {process.env.REACT_APP_MESSAGE}
          {' '}
          {process.env.NODE_ENV}
        </p>
      </header>
    </div>
  );
}

export default App;
