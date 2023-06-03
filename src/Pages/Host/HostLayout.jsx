import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  const currentlyActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? currentlyActive : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? currentlyActive : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? currentlyActive : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? currentlyActive : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
