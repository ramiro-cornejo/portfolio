import React from 'react';
import '../Footer/Footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

export const Footer = () => {
    return (
        <footer>
            <div className="section-footer">
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
            
            Portafolio Ramiro Cornejo &Copy; 2022
        </footer>
)
}
