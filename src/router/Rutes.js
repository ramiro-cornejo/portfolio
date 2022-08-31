import React from 'react';
import {Routes,Route,BrowserRouter, Navigate } from 'react-router-dom';
import {About} from '../componentes/About/About';
import {Contact} from '../componentes/Contact/Contact';
import { Footer } from '../componentes/Layout/Footer/Footer';
import { HeaderNav } from '../componentes/Layout/HeaderNav/HeaderNav';
import { ProjectDetail } from '../componentes/ProjectDetail/ProjectDetail';
import {Projects} from '../componentes/Projects/Projects';
import {Skills} from '../componentes/Skills/Skills';

export const Rutes = () => {
    return (
    <BrowserRouter>
        {/*header y nav */}
        <HeaderNav/>
        {/* contenido central */}
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to='/about' />} />
                <Route path='/About' element={<About/>} />
                <Route path='/Skills' element={<Skills/>} />
                <Route path='/Projects' element={<Projects/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/ProjectDetail/:id' element={<ProjectDetail/>} />
                <Route path='*' element={<h1>Error 404</h1>}/>
            </Routes>
        </section>

        {/* footer */}
        <Footer/>
    </BrowserRouter>
)
}
