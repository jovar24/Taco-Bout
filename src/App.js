import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Events from "./pages/events";
import Contact from "./pages/contact"

import "./style/App.scss";
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
            <Route path="/Events" component={Events} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
