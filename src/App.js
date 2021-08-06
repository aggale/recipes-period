import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/navigation/Header/Header.component'
import LandingPage from "./views/Landing/Landing.component";
import AboutPage from "./views/About/About.component";
import BrowsePage from "./views/Browse/Browse.component";
import SearchPage from "./views/Search/Search.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />  
          </Route>
          {/* This is so Header only appears on non-landing pages */}
          <div>
              <Header />
              <Route path='/about'><AboutPage /></Route>
              <Route path='/browse'><BrowsePage /></Route>
              <Route path='/search'><SearchPage /></Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
