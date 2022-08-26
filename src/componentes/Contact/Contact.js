import React from "react"
import '../Contact/Contact.css'



export const Contact = () => {
    return (
        <div className="section-contact">
            <h2 className="heading">Gracias por visitar mi portfolio</h2>
            <p className="heading-p">Para poder contactarme te dejo los siguientes medios.</p>
            <form className="contact" action='mailto:ramiro.s.cornejo@gmail.com'>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' />
                <input type="text" placeholder='Email' />
                <textarea placeholder='Motivo de contacto' />
                <input className="btn-card" type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Contact