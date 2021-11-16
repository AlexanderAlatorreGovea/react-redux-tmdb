import React from "react";
import { NavLink } from "react-router-dom";

import { NavigationLinkProps } from "../../types/NavigationLink";

import "./NavigationLink.css";

const NavigationLink = ({ path, label }: NavigationLinkProps) => {
  const getNavClass = (isActive: boolean) =>
    "nav-link" + (!isActive ? " unselected" : "");

  return (
    <li>
      <NavLink className={getNavClass} to={path}>
        {label}
      </NavLink>
    </li>
  );
};

export { NavigationLink };
