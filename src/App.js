import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Redirect
            from="/"
            to="/home" />
            <Route
              path="/home"
              component={Home} />
            <Route
              path='/Page1'exact
              render={() => <Page1/>} />
            <Route
            path="/Page2"  exact
            render={() => <Page2/>} />
             <Route
              path='/Page3' exact
              render={() => <Page3/>} />
               <Route
              path='/Page4'  exact
              render={() => <Page4/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
