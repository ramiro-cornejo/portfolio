import React from "react"
import '../Projets/Projets.css'
import { Card, Button } from "react-bootstrap"
import proyecto from '../images/proyecto.jpg'


export const Projets = () => {
    return (
        <div className="section-projets">
        <h2>Proyectos</h2>
        
        
        <Card className="card">
        <Card.Img variant="top" src={proyecto}  alt="proyecto" />
        <Card.Body>
            <Card.Title>Proyecto 1</Card.Title>
            <Card.Text>
            Caracteristicas del proyecto realizado.
            </Card.Text>
            <Button variant="primary">Deploy</Button>
            <Button variant="primary">GitHub</Button>
        </Card.Body>
        </Card>
    </div>
    )
}

export default Projets