import React from 'react';
import '../HeaderNav/HeaderNav.css'
import { NavLink } from 'react-router-dom';


export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>Logo</span>
        <h3>Ramiro Cornejo</h3>
      </div>
        
        <nav>
            <ul>
                <li>
                  <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/skills" className={({isActive}) => isActive ? "active" : ""}>Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
