import React from "react";

export const Skill = (props) => {
    return(
        <span>
            <img className={`img ${props.lenguajeClassName}-img`} src={require(`../../media/${props.img}`)} alt={`Logo de ${props.lenguaje}`}/>
             <h3>{props.lenguaje}</h3>
        </span>
    )
}