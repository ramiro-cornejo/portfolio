
import React from 'react'
import Frontend from "../images/Frontend.jpeg"
import '../About/About.css'


export const About = () => {
    
    return (
        <div className="i section-about">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>¡Hola!👋 mi nombre es</h2>  
                <h1 className='i-name'>Ramiro Sebastián Cornejo</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Desarrollador Frontend Trainee</div>
                        <div className="i-title-item">Córdoba, Argentina</div>
                    </div>
                </div>
                <p className="i-desc">
                    Anteriormente me encontraba estudiando Arquitectura, Urbanismo y Diseño - UNC, la pandemia me llevo a tomar la decisión de hacer un cambio de rubro que tenga como objetivo desarrollar mi carrera profesional en el área IT. Me considero una persona apasionada por el diseño, dispuesto a adaptarme a trabajar independientemente o en equipo.
                    Motivado a seguir aprendiendo y explorando nuevos conocimientos.🙌
                </p>
            </div>
        </div>
        <div className="i-right">
            <img src= { Frontend } alt="" className="i-img imagen" />
        </div>
    </div>
        
        
        
    )
}



export default About