import React from "react"
import '../Contact/Contact.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


export const Contact = () => {
    return (
        <div className="section-contact">
        <h1>Gracias por visitar mi portfolio</h1>
        
        <p>Para contactarme te dejo los siguientes medios</p>
        
        < BsLinkedin />
        < BsGithub />
        < MdEmail />
    </div>
    )
}

export default Contact