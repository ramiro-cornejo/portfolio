
import React from 'react'
import Frontend from "../images/Frontend.jpeg"
import '../About/About.css'


export const About = () => {
    
    return (
        
        <div className="section-about">
            <h1>Sobre mi</h1>

            <h2>Desarrollador Frontend Trainee</h2>
            
            <p>👋Hola, mi nombre es Ramiro Cornejo.</p>
            <p>
                Anteriormente me encontraba estudiando Arquitectura, Urbanismo y Diseño - UNC, la pandemia me llevo a tomar la decisión de hacer un cambio de rubro que tenga como objetivo desarrollar mi carrera profesional en el área IT. Me considero una persona apasionada por el diseño, dispuesto a adaptarme a trabajar independientemente o en equipo.
                Motivado a seguir aprendiendo y explorando nuevos conocimientos.🙌
            </p>

            <img src={Frontend} className="imagen" alt="Imagen" />
                
        </div>
        
        
    )
}



export default About