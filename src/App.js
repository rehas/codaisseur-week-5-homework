import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaBaseContainer from './containers/PizzaBaseContainer'
import PizzaSauceContainer from './containers/PizzaSauceContainer'
import PizzaPriceContainer from './containers/PizzaPriceContainer';
import PizzaToppingsContainer from './containers/PizzaToppingsContainer';
import ExpressDeliveryContainer from './containers/ExpressDeliveryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pizza Configurator</h1>
        </header>
        <div className="container">
        <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-8 d-flexflex-column">
        
            <div className="align-self-center">
            <PizzaBaseContainer/>
            </div>
            <div className="align-self-center">
            <PizzaSauceContainer/>
            </div>
            <div className="align-self-center">
            <PizzaToppingsContainer/>
            </div>
        
        </div>
        <div className="col-md-3 d-flexflex-column">
        <div className="align-self-center">
        <PizzaPriceContainer/>
        </div>
        <div className="align-self-center">
        <ExpressDeliveryContainer/>
        </div>
        
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
