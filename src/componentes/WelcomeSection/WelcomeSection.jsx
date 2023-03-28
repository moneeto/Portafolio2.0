import React, {useEffect} from "react";
import './WelcomeSection.scss'
import EliminarTexto from '../../functions/generalFunctions'

export const WelcomeSection = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            EliminarTexto()
        }, 5000);
        return () => clearTimeout(timer);
      }, []);


    return(
        <section id="welcome-section">
            <div id="contenedorTexto" className="texto-principal-profesion">
                <h1 id="frontendText" className="front-end-developer-text frontend-text">FRONT-END</h1>
                <h1 id="developerText" className="front-end-developer-text developer-text">DEVELOPER</h1>
            </div>
            <div id="tppDiv" className="texto-principal-presentacion">
                <div className="tppFotoFlex">
                    <div className="tppFlex">
                        <h1 className="nombreText opacity">Joaquin Palmeyro</h1>
                        <div id="box-1" className="box-1">
                            <div id="content-1" className="content-1">
                            <h3 id="profesion" className="profesionText">Web UI Developer</h3>
                            </div>
                        </div>
                        <br />
                        <p className="descripcionText opacity">I am a predisposed person, with courage and responsibility towards
                    work and it's environment. I have the best intentions for adaptation and
                    learning ability in the workplace, both as a group and individually.</p>
                    </div>
                    <div id="box" className="box">
                    <div id="content" className="content">
                      <img src={require('../../media/ppinsta.jpg')} alt="Joaquin Palmeyro" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}