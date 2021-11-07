import React from "react";
import { NavLink } from "react-router-dom";

import { NavigationLinkProps } from "../../types/NavigationLink";

import './NavigationLink.css';

const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  label
}) => {
  return (
    <>
      <li >
        <NavLink
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to={path}
        >
          {label}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationLink;
