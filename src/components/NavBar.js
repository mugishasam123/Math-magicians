/*eslint-disable*/

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <>
    <div className="navbar">
      <h1> Math Magicians </h1>{" "}
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/" style={{ textDecoration: 'none' ,fontSize:'21px'}}> Home </NavLink>{" "}
        </li>{" "}
        <li className="nav-link">
          <NavLink to="/Calculator" style={{ textDecoration: 'none' ,fontSize:'21px'}}> Calculator </NavLink>{" "}
        </li>{" "}
        <li className="nav-link">
          <NavLink to="/Quote" style={{ textDecoration: 'none',fontSize:'21px' }}> Quote </NavLink>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  </>
);

export default NavBar;
