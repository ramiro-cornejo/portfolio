import React from "react"
import './Projects.css'
import { Link } from 'react-router-dom';
import { proyectos } from "../../data/proyectos"
import { Card } from "react-bootstrap"




export const Projects = () => {
    return (
        <div className="section-projects">
        <h2 className="heading">Proyectos</h2>
        
        <section className="card-container">
            {
                proyectos.map(proyecto => {
                    return (
                        <Card className="card" key={proyecto.id}>
                        <Card.Img variant="top" src={"/images/"+proyecto.id+".png"}  alt="proyecto" />
                        <Card.Body>
                            <Card.Title><Link to={"/trabajo/" + proyecto.id}>{proyecto.nombre}</Link></Card.Title>
                            <Card.Text>{proyecto.categorias}</Card.Text>
                            <button className="btn-card">Deploy</button>
                            <button className="btn-card">GitHub</button>
                            
                        </Card.Body>
                        </Card>
                    );
                })
            }
        </section>
    </div>
    )
}

export default Projects