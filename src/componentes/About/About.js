import React from "react";
import Frontend from "../images/Frontend.png";
import "../About/About.css";

export const About = () => {
  return (
    <div className="i section-about">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">¡Hola!👋 mi nombre es</h2>
          <h1 className="i-name">Ramiro Sebastián Cornejo</h1>
          <div className="i-title">
            <div className="animate__fadeInUp">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">
                Web en proceso Web en proceso Web en proceso Web en proceso Web
                en proceso Web en proceso Web en proceso Web en proceso Web en
                proceso Web en proceso Web en proceso Web en proceso Web en
                proceso Web en proceso Web en proceso
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
    <div className="i-right">
        <img src= { Frontend } alt="imagen" className="i-img imagen" />
    </div>
*/

export default About;
