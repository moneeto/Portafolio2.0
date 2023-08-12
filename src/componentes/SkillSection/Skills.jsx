import React from 'react';
import './Skills.scss';

function Skills() {


    return(
        <>
        <div className="background-logos box-1">
            <div className="skills-logos content-1" id="logos-skills">
                <span>
                    <img className="img react-img" src={require('../../media/React-icon.svg.png')} alt="Logo de React.JS"/>
                    <h3>React.JS</h3>
                </span>
                <span>
                    <img className="img node-img" src={require('../../media/nodejs.png')} alt="Logo de Node" />
                    <h3>Node</h3>
                </span>
                <span>
                    <img className="img sqlyog-img" src={require('../../media/sqlyog.png')} alt="Logo de SQLyog"/>
                    <h3>SQLyog</h3>
                </span>
                <span>
                    <img className="img javascript-img" src={require('../../media/javascript-icon.png')} alt="Logo de JavaScript" />
                    <h3>JavaScript</h3>
                </span>
                <span>    
                    <img className="img html-img" src={require('../../media/html.png')} alt="Logo de HTML" />
                    <h3>HTML</h3>
                </span>
                <span>
                    <img className="img sass-img" src={require('../../media/Sass.png')} alt="Logo de Sass"/>
                    <h3>Sass</h3>
                </span>
            </div>
        </div>
    </> 
    )
    
}

export default Skills;