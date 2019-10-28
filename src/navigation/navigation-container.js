import React from "react";
import { NavLink } from "react-router-dom";

const NavConatiner = () => {
  return (
    <div className="NavContainer">
      <div className="nav-link-wrapper">
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>
        <NavLink to="/About">About</NavLink>
      </div>
    </div>
  );
};

export default NavConatiner;
