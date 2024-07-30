import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}

export default Navbar;
