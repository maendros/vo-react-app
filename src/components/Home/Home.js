import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Home.css";
const Home = props => {
  const menu = [{ title: "Section 1" }, { title: "Section 2" }];
  return (
    <div className="home-container">
      <h2 className="section-titles">Our Sections</h2>
      <div className="section-navigation">
        <Navigation menuInfo={menu} options={{fontClass :'NavigationSection', activeClass :'activeSection'}} />
      </div>
      <div className="section-container">{props.children}</div>
    </div>
  );
};

export default Home;
