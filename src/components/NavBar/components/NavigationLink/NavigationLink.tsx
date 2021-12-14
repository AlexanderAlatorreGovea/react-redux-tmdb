import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLink.css";

export interface NavigationLinkProps {
  path: string;
  label: string;
}

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
