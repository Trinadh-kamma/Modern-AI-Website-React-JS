import React from 'react';
import "./feature.css";

const Feature = ({title, text}) => {
  return (
    <div className="gpt3__features-feature-container">

      <div className="gpt3__features-feature-title">
        <div/>
        <h1>{title}</h1>
      </div>

      <div className="gpt3__features-feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
