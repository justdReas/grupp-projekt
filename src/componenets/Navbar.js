import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="sidebar">
        <ul>
          <NavLink className="button" to="/">
            Page 1
          </NavLink>
        </ul>
        <ul>
          <NavLink className="button" to="/page2">
            Page 2
          </NavLink>
        </ul>
        <ul>
          <NavLink className="button" to="/page3">
            Page 3
          </NavLink>
        </ul>
        <ul>
          <NavLink className="button" to="/page4">
            Page 4
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
