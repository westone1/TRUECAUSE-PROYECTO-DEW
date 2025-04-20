import React from "react";
import logoTrueCause from './img/logoTrueCause-noBg.png'
import TrueCauseCorazon from './img/true-cause-corazon.png'
import './css/footer/footer.css'

function Footer(){
    return(
        <div class="footer_mainContainer">
        <div class="footer_mainContainer__mainbox">
            <div class="footer_mainContainer__mainbox__navBox">
                <img src={logoTrueCause} alt="logo-truecause-vih-lucha"/>
                <nav class="footer_mainContainer__navBox__navbar">
                    <ul>
                        <li><a href="">Empresas Aliadas</a></li>
                        <li><a href="">Historias de impacto</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="#header">Inicio</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer_mainContainer__mainbox__socialMediaBox">
                <img src={TrueCauseCorazon} alt=""/>
                <div class="footer_mainContainer__socialMediaBox__redes">
                    <a href="https://www.instagram.com/truecausearg/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/TrueCauseArgentina" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/TrueCauseArg" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/truecausearg/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                
            </div>
        </div>
        <div class="separator"></div>
        <div class="footer_mainContainer__derechosBox">
            <p class="derechos">© Todos los derechos reservados <span class="fecha"></span></p>
        </div>
    </div> 

    )

}

export default Footer