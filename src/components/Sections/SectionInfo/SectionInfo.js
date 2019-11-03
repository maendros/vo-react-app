import React from "react";
import "./SectionInfo.css";
const SectionInfo = ({ ...data }) => {

  function percentage(num, per) {
    return (num / 100) * per;
  }

  return (
    <div className="section-info-container">
      <p className="section-info-title">{data.title}</p>
      <h2>{data.graphText}</h2>
      <div className="progress-section">
        {data.stats != null &&
          data.stats.map((stat, index) => (
            <div key={index}>
              <div className="progress-details">
                
                <div className="progress-title">{stat.title}</div>
                <div className="progress-percentage">
                  {percentage(10, stat.amount)} %
                </div>
              </div>

              <div className="progress">
                <div
                  className={`progress-bar progress-${index}`}
                  style={{ width: `${stat.amount / 3}px` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionInfo;
