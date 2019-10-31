import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios"



import Home from "./pages/home";
import About from "./pages/About";
import Events from "./pages/events";
import Contact from "./pages/contact"
import NavConatiner from "./navigation/navigation-container";

import "./style/App.scss";



export default class App extends Component {
  constructor() {
    super()

    this.getLoginInfo = this.getLoginInfo.bind(this)
  }
  getLoginInfo() {
    axios
      .get("http://localhost:5000/users")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    this.getLoginInfo();
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
    )
  }
}

