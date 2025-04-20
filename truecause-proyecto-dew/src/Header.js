import React, { useEffect, useState } from "react";
import logoTrueCause from './img/logoTrueCause-noBg.png'
import SolIcono from './img/sol.png'
import LunaIcono from './img/luna.png'
import './css/header/header.css'

function HeaderMainContainer() {

    const [modoOscuro, setModoOscuro] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', modoOscuro ? 'dark' : 'light');
    }, [modoOscuro]);


    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema');
        if (temaGuardado === 'dark') setModoOscuro(true);
    }, []);

    const cambioTema = () => {
        setModoOscuro(prev => !prev);
    }


    return (
        <div className="header-mainContainer">
            <img className="logo-truecause" src={logoTrueCause} />
            <nav className="header-mainContainer__navbar">
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Empresas aliadas</a></li>
                    <li><a>Historias de impacto</a></li>
                    <li><a>Contáctanos</a></li>
                </ul>
            </nav>
            <img className="cambioTema" src={modoOscuro ? SolIcono : LunaIcono} onClick={cambioTema} />
        </div>
    )
}
/*
const header = document.getElementById("header")
const linksMenuBar = document.querySelectorAll("#link_menuBar")
const articles = document.querySelectorAll("#whiteArticle")
const whiteTexts = document.querySelectorAll("#whiteText")
const whiteShape = document.querySelectorAll("#whiteShape")

const themeButton = document.getElementById("themeButton")
let flagTheme = 0
function switchTheme(){
    if(flagTheme == 0){
        temaOscuro()
        flagTheme = 1;
        return flagTheme
    }
    if(flagTheme == 1){
        temaClaro()
        flagTheme = 0;
        return flagTheme
    }
}

function temaOscuro(){
    themeButton.setAttribute("src", SolIcono)

    
    header.style.backgroundColor="var(--color-negro)"
    for(let i = 0; i<linksMenuBar.length;i++){
        linksMenuBar[i].style.color="var(--color-blanco)"
    }
    for(let i = 0; i<articles.length; i++){
        articles[i].style.backgroundColor="var(--color-negro)"
    }
    for(let i = 0; i<whiteTexts.length; i++){
        whiteTexts[i].style.color="var(--color-blanco)"
    }
    for(let i = 0; i<whiteShape.length;i++){
        whiteShape[i].style.backgroundColor="var(--color-negro)"
   }
    
   
}
function temaClaro(){
    themeButton.setAttribute("src", LunaIcono)

    header.style.backgroundColor="var(--color-blanco)"
    for(let i = 0; i<linksMenuBar.length;i++){
        linksMenuBar[i].style.color="var(--color-plomo-letras)"
    }
    for(let i = 0; i<articles.length; i++){
        articles[i].style.backgroundColor="var(--color-plomo-fondo)"
    }
    for(let i = 0; i<whiteTexts.length; i++){
        whiteTexts[i].style.color="var(--color-plomo-letras)"
    }
    for(let i = 0; i<whiteShape.length;i++){
        whiteShape[i].style.backgroundColor="var(--color-plomo-fondo)"
   }
    

}
*/
export default HeaderMainContainer
