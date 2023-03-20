import React from 'react';
import { Feature } from '../../components';
import "./features.css";

const featuresData =[
  {
    title : "chatGPT",
    text : "ChatGPT’s power can go far beyond copywriting and can help with ad campaign strategies, research, and even code writing."
  },
  {
    title : "Dall-E 2",
    text : "Marketers have utilized Dall-E to produce ad creatives, social media images, and even promotional materials for print advertising."
  },
  {
    title : "Copy Smith",
    text : "This is a great tool to add to your collection of copywriting tools since you don’t have to start over and over again trying to come up with the right idea."
  },
  {
    title : "Algolia",
    text : "By using this technology, you will create an environment where customers don’t have to search for a specific keyword but the real meaning and significance can be found across the text. "
  },

]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into  Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
