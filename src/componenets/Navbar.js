import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={{ display: "flex", width: "15%" }}>
      <nav className="sidebar">
        <ul>
          <NavLink className="button" to="/">
            Staff
          </NavLink>
        </ul>
        <ul>
          <NavLink className="button" to="/page2">
            Page 2
          </NavLink>
        </ul>
        <ul>
          <NavLink className="button" to="/page3">
            Utbildningar
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
