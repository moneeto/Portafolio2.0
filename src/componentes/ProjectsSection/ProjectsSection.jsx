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
                    url='https://moneeto.github.io/TODO-list.github.io/'
                    image={require('../../media/task-manager.png')}
                    imageAlt='Task Manager image'
                    title='Task Manager'
                    paragraph='TO-DO List made with React using hooks, components and LocalStorage' />
                <Project
                    url='https://moneeto.github.io/ferrari-landingpage.github.io/'
                    image={require('../../media/ferrari-landing-page.png')}
                    imageAlt='Ferrari F58 Image'
                    title='Ferrari Landing Page'
                    paragraph='A soft and delicated landing page using HTML, CSS and JavaScript' />
                <Project
                    url='https://moneeto.github.io/click-counter.github.io/'
                    image={require('../../media/contador-de-clicks.png')}
                    imageAlt='Task Manager image'
                    title='Click Mini-Game'
                    paragraph='A click counter mini-game with a interactive timer, using React and Custom Hooks' />
                

                
            </div>
        </div>
    </section>
    </>
    )
}