import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import Card from "../Card/Card";

const About = () => {
  const callApi = "https://voda-react-assessment.herokuapp.com/page";
  const [aboutInfo, setAboutInfo] = useState({
    name: "",
    description: ""
  });
  const [cards, setCards] = useState([
    {
      icon: "",
      title: "",
      description: "",
      link: ""
    }
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(callApi);

      setCards(result.data[0].tiles);
      setAboutInfo({
        name: result.data[0].name,
        description: result.data[0].description
      });
    };
    fetchData();
  }, []);
  return (
    <div className="about-container">
      <h3>{aboutInfo.description}</h3>
      <section className="cards">
 
        {cards != null &&
          cards.map((card, index) => (
            <Card cardProperties={{ ...card }} key={index} />
          ))}
      </section>
    </div>
  );
};

export default About;
