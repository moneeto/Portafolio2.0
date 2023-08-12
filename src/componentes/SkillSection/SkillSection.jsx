import React, {useState} from 'react'
import './SkillSection.scss'
import Skills from './Skills.jsx'
import { MostrarSkills } from '../../functions/generalFunctions'


export const SkillSection = () => {

    const [showTools, setShowTools] = useState(false)
    const onClick = () => { 
        setShowTools(true)
        MostrarSkills()
    }

    return (
        <section id="skills-section">
        <div className="skills-container reveal">
            <h1 className="skills-container-title">Tools</h1>
        </div>
        <p className={showTools ? "skills-container-p invisible" : "skills-container-p" }>Biggest part of projects that I work are implemented with:</p>
        {showTools ? <Skills /> : null}
        <div className="skill-button-div">
            <button className="skill-button hvr-shutter-in-horizontal" id="buttonSkill" onClick={onClick}>Show tools!</button>
        </div>
        
        </section>
    )
}