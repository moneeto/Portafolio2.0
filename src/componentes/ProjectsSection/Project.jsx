import React from "react";
import './Project.scss'

export const Project = (props) => {
    return(
        <a href={props.url} rel="noreferrer" target="_blank">    
                    <div className="project-card">
                    <div className="img-div">
                        <img src={props.image} alt={props.imageAlt} className="project-img" />
                    </div>
                        <div className="description">
                            <h1 className="project-title">{props.title}</h1>
                            <p className="project-text">{props.paragraph}</p>
                        </div>
                    </div>
                </a>
    )

}