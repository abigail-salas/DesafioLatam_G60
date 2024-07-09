import React from "react";
import { NavLink } from "react-router-dom";

function Navigate() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div>
      <NavLink className={setActiveClass} to={"/"}>
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to={"/personajes"}>
        Personajes
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to={"/admin"}>
        Admin
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to={"/login"}>
        Login
      </NavLink>
    </div>
  );
}

export default Navigate;
