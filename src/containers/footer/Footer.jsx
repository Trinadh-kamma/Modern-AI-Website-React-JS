import React from 'react';
import "./footer.css";
import gpt3logo from "../../assets/assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>
          <a href="openai.com" target="_blank">Request Early Access</a>
        </p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo"/>
          <p>	Pioneer Building, San Francisco, California, US</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>415-1234</p>
          <p>press@openai.com</p>
          <p>Overview</p>
        </div>
      </div>


      <div className="gpt3__footer-copyright">
        <p>OpenAI © 2015 – 2023</p>
      </div>
    </div>
  )
}

export default Footer
