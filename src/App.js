import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gotService from'./services';

class App extends Component {
  render() {
    const serv = new gotService();
    serv.getBooks(1).then(res=>console.log(res));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
