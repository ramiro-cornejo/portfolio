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
        < BsLinkedin className="icon-padding"/>
        < BsGithub className="icon-padding" />
        < MdEmail className="icon-padding"/>
        </div>
        
    </div>
    )
}

export default Contact