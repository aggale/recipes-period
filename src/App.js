import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/browse">
            <Header />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
