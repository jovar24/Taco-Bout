import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";

import "./App.css";
import NavConatiner from "./navigation/navigation-container";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavConatiner />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
