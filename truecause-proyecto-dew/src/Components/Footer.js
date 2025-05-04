import React from "react";
import Fecha from "../Components/Fecha.js";
import logoTrueCause from '../img/logoTrueCause-noBg.png'
import TrueCauseCorazon from '../img/true-cause-corazon.png'
import LogoX from '../img/logotipo-x.png'
import LogoIg from '../img/logotipo-de-instagram.png'
import LogoLinke from '../img/logotipo-de-linkedin.png'
import logoFb from '../img/logotipo-facebook.png'
import '../css/footer/footer.css'
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div class="footer_mainContainer">
        <div class="footer_mainContainer__mainbox">
            <div class="footer_mainContainer__mainbox__navBox">
                <img src={logoTrueCause} alt="logo-truecause-vih-lucha"/>
                <nav class="footer_mainContainer__navBox__navbar">
                    <ul>
                        <Link style={{ textDecoration:'none',fontSize: '25px', color: 'white' }} to="/"><li><a>Inicio</a></li></Link>
                        <Link style={{ textDecoration:'none',fontSize: '25px', color: 'white' }} to="/hImpacto"><li><a>Historias de impacto</a></li></Link>
                        <Link style={{ textDecoration:'none',fontSize: '25px', color: 'white' }} to="/contacto"> <li><a>Contacto</a></li></Link>
                        
                    </ul>
                </nav>
            </div>
            <div class="footer_mainContainer__mainbox__socialMediaBox">
                <img src={TrueCauseCorazon} alt=""/>
                <div class="footer_mainContainer__socialMediaBox__redes">
                    <a href="https://x.com/" target="_blank" rel="noreferrer"><img alt="x-logo" src={LogoX}/></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img alt="fb-logo" src={logoFb}/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img alt="x-logo" src={LogoIg}/></a>
                    <a href="https://www.linkedin.com" target="_blank"><img alt="linke-logo" src={LogoLinke}/></a>
                </div> 
            </div>
        </div>
        <div class="separador"></div>
        <div class="footer_mainContainer__derechosBox">
            <p class="derechos">© Todos los derechos reservados <Fecha/> </p>
        </div>
    </div> 

    )

}

export default Footer