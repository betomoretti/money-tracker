import React, { Component } from 'react';
import Tracker from './Tracker';
import logo from '../assets/images/piggy-bank.svg';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Money Tracker</h2>
        </div>
        <div className="tracker--container">
          <Tracker />
        </div>
      </div>
    );
  }
}

export default App;
