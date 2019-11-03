import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
const Slider = () => {
  const callApi = "https://voda-react-assessment.herokuapp.com/slider";

  const [images, setImages] = useState([
    {
      image: "",
      title: "",
      subtitle: ""
    }
  ]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(callApi);

      setImages(result.data);
    };
    fetchData();
  }, []);
  const handleClick = event => {
    setActiveImage(event);
  };
  return (
    <div className="slider-container">
      {images != null &&
        images.map(
          (image, index) =>
            index === activeImage && (
              <div key={index}>
                <img
                  className="slider-img active"
                  alt={image.title}
                  src={image.image}
                />
                <div className="slide-txt">
                  <h1>{image.title}</h1>
                  <div>{image.subtitle}</div>
                </div>
              </div>
            )
        )}

      <div className="slider-bullets-container">
        {images != null &&
          images.map((image, index) => (
            <span
              key={index}
              className={
                "slider-bullet " +
                (index === activeImage ? "slider-bullet-active" : "")
              }
              onClick={() => handleClick(index)}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default Slider;
