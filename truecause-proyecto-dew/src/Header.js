import React from "react";
import logoTrueCause from './img/logoTrueCause-noBg.png'
import './css/header/header.css'

function HeaderMainContainer() {
    return(
        <div className="header-mainContainer">
            <img src={logoTrueCause}></img>
            <nav className="header-mainContainer__navbar">
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Empresas aliadas</a></li>
                    <li><a>Historias de impacto</a></li>
                    <li><a>Contáctanos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMainContainer
