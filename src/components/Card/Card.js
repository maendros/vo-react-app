import React from "react";
import "./Card.css";
const Card = ({ cardProperties }) => {
  return (
    <article  className="card">
      <img src={process.env.PUBLIC_URL+"/assets/images/"+cardProperties.icon+".png"} alt=""/>
      <div className="container">
        <h4>
          <b>{cardProperties.title}</b>
        </h4>
        <p>{cardProperties.description}</p>
        <a href={cardProperties.link}>Learn More</a>
      </div>
    </article>
  );
};

export default Card;
