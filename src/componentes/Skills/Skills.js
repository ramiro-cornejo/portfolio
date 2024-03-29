import React from "react"
import '../Skills/Skills.css'
import {DiHtml5,DiCss3 , DiSass, DiJavascript1, DiReact, DiBootstrap, DiGit, DiGithubFull} from 'react-icons/di'


export const Skills = () => {
    return (
        
        <div className="section-skill">
            <h2 className="heading">Habilidades</h2>
            <div className="icon">
            < DiHtml5 />
            < DiCss3 />
            < DiSass />
            < DiBootstrap />
            < DiJavascript1 />
            < DiReact />
            < DiGit />
            < DiGithubFull />
            </div>
        </div>
        
    )
}

export default Skills