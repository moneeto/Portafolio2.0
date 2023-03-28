import React, { useEffect } from 'react';
import './Skills.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Skills() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return(
        <>
        <div className="background-logos box-1">
            <div className="skills-logos content-1" id="logos-skills" data-aos="zoom-in">
                <span>
                    <img className="img react-img" src={require('../../media/React-icon.svg.png')} alt="Logo de React.JS"/>
                    <h3>React.JS</h3>
                </span>
                <span>
                    <img className="img sass-img" src={require('../../media/Sass.png')} alt="Logo de Sass"/>
                    <h3>Sass</h3>
                </span>
                <span>
                    <img className="img javascript-img" src={require('../../media/javascript-icon.png')} alt="Logo de JavaScript" />
                    <h3>JavaScript</h3>
                </span>
                <span>
                    <img className="img css-img" src={require('../../media/css-3-512.png')} alt="Logo de CSS" />
                    <h3>CSS</h3>
                </span>
                <span>    
                    <img className="img html-img" src={require('../../media/html.png')} alt="Logo de HTML" />
                    <h3>HTML</h3>
                </span>
                <span>
                    <img className="img visualbasic-img" src={require('../../media/visualbasic.png')} alt="Logo de Visual Basic .NET"/>
                    <h3> VB .NET</h3>
                </span>
            </div>
        </div>
    </> 
    )
    
}

export default Skills;