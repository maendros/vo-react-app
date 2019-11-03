import React from "react";
import SectionForm from "./SectionForm/SectionForm";
import SectionInfo from "./SectionInfo/SectionInfo";
import  './Section.css';

const Section = ({ info }) => {
  console.log(info);
  return (
    <div className="section-container">
      <div className="section-item">
        <SectionInfo
          title={info.title}
          stats={info.stats}
          graphText={info.graphText}
        />
      </div>

      <div className="section-item">
        <SectionForm
          buttonText={info.buttonText}
          formLabels={info.formLabels}
          formText={info.formText}
        />
      </div>
    </div>
  );
};

export default Section;
