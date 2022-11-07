import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        <b>Languages</b>:Javascript, java  <br />
        <b>Frameworks</b>: Express <br />
        <b>Chatbots</b>:Web Chatbot, NLP, Facebook Messenger, Telegram, Alexa Voice Bot.<br />
        <b>Tools</b> :MySQL Workbench, Git, Dialogflow.<br />
        <b>Editor Journey</b>:Sublime, Netbeans, VS Code<br />
        <b>Operating System</b>: Linux, Windows<br />
       
        <b>Experience</b> <br />

        Total Exp. - 1+ Years
        Current Employer - Backend Developer, Function-Up, Bangalore, India
        </p>

       

      </div>
    </div>
  );
};

export default About;
