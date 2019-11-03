import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = props => {
  console.log(props);
  return (
    <li className={`NavigationItem ${props.options.fontClass}`}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={`active ${props.options.activeClass}`}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
