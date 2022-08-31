import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { proyectos } from '../../data/proyectos';

export const ProjectDetail = () => {
    const params = useParams();

    useEffect(()=>{
        let projects = proyectos.filter(proyecto => proyecto.id === params.id);
        console.log(projects)
    }, []);// Solucionar falla hook useEffect

  return (
    <div className='page'>
        <h1 className='heading'>Proyecto: {params.id}</h1>
    </div>
  )
}
