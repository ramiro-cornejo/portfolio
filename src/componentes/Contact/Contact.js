import React from "react"
import '../Contact/Contact.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export const Contact = () => {
    return (
        <div className="section-contact">
        <h2>Gracias por visitar mi portfolio</h2>
        
        <p>Para contactarme te dejo los siguientes medios</p>
        <div className="icon-contacto">
            <div className="icon-container">
                < BsLinkedin className="icon-padding"/>
                <a href="https://www.linkedin.com/in/ramiro-sebasti%C3%A1n-cornejo/" className="link" target="_blank" rel="noreferrer" >Linkedin</a>
            </div>
            <div className="icon-container">
                < BsGithub className="icon-padding" />
                <a href="https://github.com/ramiro-cornejo" className="link" target="_blank" rel="noreferrer" >Github</a>
            </div>
            <div className="icon-container">
                < MdEmail  className="icon-padding"/>
                <a href="mailto:ramiro.s.cornejo@gmail.com" className="link" target="_blank" rel="noreferrer" > Email</a>
            </div>
        </div>
        
        </div>
    )
}

export default Contact