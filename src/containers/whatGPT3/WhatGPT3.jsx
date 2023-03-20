import React from 'react';
import { Feature } from  "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">

      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>


      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT 3 Chatbot is a large language model chatbot capable of interacting with the user in a conversational way."/>
        <Feature title="Future of GPT-3" text="OpenAI and others are working on even more powerful models. There are a number of open source efforts in play to provide a free and nonlicensed model as a counterweight to Microsoft's exclusive ownership."/>
        <Feature title="History of GPT-3" text="The first version of GPT was released in 2018 and contained 117 million parameters."/>
      </div>

    </div>
  )
}

export default WhatGPT3
