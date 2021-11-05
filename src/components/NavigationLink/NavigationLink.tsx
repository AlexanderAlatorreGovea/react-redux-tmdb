import React from "react";
import { Link } from "react-router-dom";

const NavigationLink: React.FC = ({ children }) => {
  return (
    <>
      <li>
        <Link to={""}>{children}</Link>
      </li>
    </>
  );
};

export default NavigationLink;
