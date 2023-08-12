import React from "react";
import './ProjectsSection.scss'
import { Project } from "./Project";

export const ProjectsSection = () => {
    
    
    return(
        <>
        <section id="projects-section">
        <div className="projects-container reveal">
            <h1 className="projects-container-title">My Projects</h1>
            <div className="projectFlex">
                <Project
                    url='https://jevita-hom.yvera.gob.ar/'
                    image={require('../../media/jevita.png')}
                    imageAlt='Juegos Evita 2023 image'
                    title='Juegos Evita'
                    paragraph='The admin platform of Juegos Evita 2023 edition, using React and Node.js (https) ' />
                <Project
                    url='https://moneeto-todo-list.vercel.app/'
                    image={require('../../media/task-manager.png')}
                    imageAlt='Task Manager image'
                    title='Task Manager'
                    paragraph='TO-DO List made with React using hooks, components and LocalStorage' />
                <Project
                    url='https://moneeto.github.io/ferrari-landingpage.github.io/'
                    image={require('../../media/ferrari-landing-page.png')}
                    imageAlt='Ferrari F58 Image'
                    title='Ferrari Landing Page'
                    paragraph='Landing page where I use HTML, CSS and JavaScript' />

                
            </div>
        </div>
    </section>
    </>
    )
}