import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.js';
import InventoryDisplay from './components/InventoryDisplay/InventoryDisplay';
class App extends Component {
  render() {
    const text = 'Welcome to the app!';
    return (

      <div>
        <Header text= {text} />
        <InventoryDisplay />
      </div>
      // \/ removed for testing
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <Header>
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
