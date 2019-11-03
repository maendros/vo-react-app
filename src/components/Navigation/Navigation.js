import React from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = ({ menuInfo, options }) => {
  function createLink(titleTxt) {
    let link = titleTxt.replace(/\s/g, "");
    if (link === "home") {
      link = "";
    }
    return link.toLowerCase();
  }
  return (
    <ul className="Navigation">
      {menuInfo != null &&
        menuInfo.map(el => (
          <NavigationItem
            key={el.title}
            link={`/${createLink(el.title)}`}
            options={options}
          >
            {el.title}
          </NavigationItem>
        ))}
    </ul>
  );
};

export default Navigation;
