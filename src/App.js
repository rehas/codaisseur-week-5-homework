import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaBaseContainer from './containers/PizzaBaseContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pizza Configurator</h1>
        </header>
        <PizzaBaseContainer/>
      </div>
    );
  }
}

export default App;
