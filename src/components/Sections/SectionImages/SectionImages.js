import React from "react";
import "./SectionImages.css";
const SectionImages = ({ images }) => {
  console.log(images);
  return (
    <div className="image-row">
      {images != null &&
        images.map((image, index) => (
          <div className={`image-sec image-item-${index}`} key={index}>
            <img className="image-item" alt={image.title} src={image.img} />
            <div className="inner-image-section">
              <img
                className="image-icon"
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/images/icon-grid-image.png"
                }
              />
              <p>{image.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SectionImages;
