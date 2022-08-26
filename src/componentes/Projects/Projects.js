import React from "react"
import './Projects.css'
import { Card } from "react-bootstrap"
import proyecto from '../images/proyecto.jpg'


export const Projects = () => {
    return (
        <div className="section-projects">
        <h2 className="heading">Proyectos</h2>
        
        
        <Card className="card">
        <Card.Img variant="top" src={proyecto}  alt="proyecto" />
        <Card.Body>
            <Card.Title>Proyecto 1</Card.Title>
            <Card.Text>
            Caracteristicas del proyecto realizado.
            </Card.Text>
            <button className="btn-card">Deploy</button>
            <button className="btn-card">GitHub</button>
            
        </Card.Body>
        </Card>
    </div>
    )
}

export default Projects