import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

const NavConatiner = () => {
  return (

    <div className="NavContainer">
      <div className="left-side">
        <img src={logo} />
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
        </NavLink>
          <NavLink activeClassName="nav-link-active" to="/About">About</NavLink>
          <NavLink activeClassName="nav-link-active" to="/Events">Events</NavLink>
          <NavLink activeClassName="nav-link-active" to="/Contact">Contact-us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavConatiner;
