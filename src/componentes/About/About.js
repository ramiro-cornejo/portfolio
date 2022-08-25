import React from "react";
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
              <div className="i-title-item">
                <p>
                  Anteriormente era estudiante de Arquitectura, la pandemia me
                  llevo a tomar la decisión de hacer un cambio de rubro que
                  tenga como objetivo desarrollar mi carrera profesional en el
                  mundo IT, en especial como Desarrollador Frontend.
                </p>
                <p>
                  Me considero una persona apasionada por el diseño/desarrollo,
                  dispuesto a adaptarme a trabajar independientemente o en
                  equipo. Motivado a seguir aprendiendo y explorando nuevos
                  conocimientos.
                </p>
              </div>
              <div className="btn-card-container">
              <button className="btn-card-about">Descargar CV</button>
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
