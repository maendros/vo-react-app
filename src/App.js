import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import SearchBox from "./components/SearchBox/SearchBox";
import Slider from "./components/Slider/Slider";
import axios from "axios";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SectionImages from "./components/Sections/SectionImages/SectionImages";

import Section from "./components/Sections/Section";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const homeCall = "https://voda-react-assessment.herokuapp.com/home";
  const aboutCall = "https://voda-react-assessment.herokuapp.com/page";
  const menuCall = "https://voda-react-assessment.herokuapp.com/menu";
  const [appInfo, setAppInfo] = useState({
    home: {},
    about: {},
    menu: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resultHome = await axios(homeCall);
      const resultAbout = await axios(aboutCall);
      const resultMenu = await axios(menuCall);
      setAppInfo({
        home: resultHome.data[0],
        about: resultAbout.data[0],
        menu: resultMenu.data
      });
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <div className="upper-layout">
          <div className="navigation-layout">
            <Navigation
              menuInfo={appInfo.menu}
              options={{
                fontClass: "NavigationMenu",
                activeClass: "activeMenu"
              }}
            />
            <SearchBox />
          </div>
          <Slider />
        </div>
        <div className="main-layout">
          <Switch>
            <Route
              path={["/section1", "/home", "/"]}
              exact
              render={() =>
                appInfo.home.sections != null && (
                  <Home>
                    <SectionImages images={appInfo.home.sections[0].images} />
                  </Home>
                )
              }
            />
            <Route
              path="/section2"
              exact
              render={() =>
                appInfo.home.sections != null && (
                  <Home>
                    <Section info={appInfo.home.sections[1]} />{" "}
                  </Home>
                )
              }
            />

            <Route
              path="/page2"
              render={() => <About data={{ ...appInfo.about }} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
