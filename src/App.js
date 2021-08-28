/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path = '/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;