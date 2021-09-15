import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/navigation/Header/Header.component";
import LandingPage from "./views/Landing/Landing.component";
import AboutPage from "./views/About/About.component";
import BrowsePage from "./views/Browse/Browse.component";
import SearchPage from "./views/Search/Search.component";
import FullRecipe from "./views/FullRecipe/FullRecipe.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/browse">
              <BrowsePage />
            </Route>
            <Route path="/recipes/:id">
              <FullRecipe />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
