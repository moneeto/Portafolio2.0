import React, { useEffect } from "react";
import './WelcomeSection.scss'
import EliminarTexto from '../../functions/generalFunctions'

export const WelcomeSection = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            EliminarTexto()
        }, 5000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <section id="welcome-section">
            <div id="contenedorTexto" className="texto-principal-profesion">
                <h1 id="frontendText" className="front-end-developer-text frontend-text">SOFTWARE</h1>
                <h1 id="developerText" className="front-end-developer-text developer-text">DEVELOPER</h1>
            </div>
            <div id="tppDiv" className="texto-principal-presentacion">
                <div className="tppFotoFlex">
                    <div className="tppFlex">
                        <h1 className="nombreText opacity">Joaquin Palmeyro</h1>
                        <div id="box-1" className="box-1">
                            <div id="content-1" className="content-1">
                                <h3 id="profesion" className="profesionText">Web Developer</h3>
                            </div>
                        </div>
                        <br />
                        <p className="descripcionText">System Analyst & Developer with experience in building MVC platforms, integrating APIs, implementing authentication, and handling file processing with data operations. Contributed to projects such as Boletas, Padrón Social, and UOM's Digital Credential.</p>
                        <a style={{marginTop:"30px"}} href={require('../../media/cv.pdf')} target="_blank"><button className="btn-cv">View CV</button></a>
                    </div>
                    <div id="box" className="box">
                        <div id="content" className="content">
                            <img src={require('../../media/fotoperfilportafolio.jpg')} alt="Joaquin Palmeyro" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}