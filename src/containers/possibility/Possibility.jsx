import React from 'react';
import possibilityImage from "../../assets/assets/possibility.png"
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>

      <div className="gpt3__possibility-content">
        <h4>
          Request Early Access to Get Started
        </h4>
         <h1 className="gradient__text">
          The Possibilities are beyond your imagination
         </h1>
         <p>Tools created with GPT-3 technology will create a  shift in how content is produced, and the decrease in content delivery time will be something remarkable and to be talked about for a long time.</p>
         <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
