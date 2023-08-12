import React, { useState } from "react";
import './Header.scss' 


const Header = () => { 
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground) // window scroll

    return (
        <header id="header">
        <nav id="navbar" className={navbar ? "navbar scrollDown" : "navbar"}>
          <ul className="flex-list-container">
            <div className="div-logo-principal">
                <a href="#welcome-section">
                    <svg className="dibujoSvg" width="70" height="70" viewBox="0 0 117 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="117" height="79"/>
                    <g id="Cuerpo">
                        <path id="Polygon 1" d="M51.7099 1.84346C54.8643 -0.448338 59.1357 -0.448337 62.2901 1.84346L89.7522 21.7959C92.9066 24.0877 94.2265 28.15 93.0216 31.8582L82.532 64.1418C81.3272 67.85 77.8716 70.3607 73.9725 70.3607H40.0275C36.1284 70.3607 32.6728 67.85 31.468 64.1418L20.9784 31.8582C19.7735 28.15 21.0934 24.0877 24.2478 21.7959L51.7099 1.84346Z" fill="#D9D9D9"/>
                        <path id="Polygon 2" d="M35.4641 77C33.9245 79.6667 30.0755 79.6667 28.5359 77L0.823081 29C-0.71652 26.3333 1.20798 23 4.28718 23L59.7128 23C62.792 23 64.7165 26.3333 63.1769 29L35.4641 77Z" fill="#D9D9D9"/>
                        <path id="Polygon 3" d="M88.4641 77C86.9245 79.6667 83.0755 79.6667 81.5359 77L53.8231 29C52.2835 26.3333 54.208 23 57.2872 23L112.713 23C115.792 23 117.717 26.3333 116.177 29L88.4641 77Z" fill="#D9D9D9"/>
                    </g>
                    <g id="Ojos">
                        <rect id="Ojo Izquierdo" className="ojo" x="46" y="25" width="4" height="13" fill="black"/>
                        <rect id="Ojo Derecho" className="ojo" x="64" y="25" width="4" height="13" fill="black"/>
                    </g>
                    </svg>
                </a>
            </div>
            <li className="nav-link hvr-underline-from-center"><a href="#welcome-section">About me</a></li>
            <li className="nav-link hvr-underline-from-center"><a href="#skills-section">Tools</a></li>
            <li className="nav-link hvr-underline-from-center"><a href="#projects-section">My Projects</a></li>
            <li className="nav-link hvr-underline-from-center"><a href="#contact-section">Contact</a></li>
          </ul>  
      </nav>
    </header>
    )
}

export default Header;