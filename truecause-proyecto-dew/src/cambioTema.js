
const themeButton = document.getElementById("themeButton")
let flagTheme = 0

function CambioTema(){
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

const header = document.getElementById("header")
const linksMenuBar = document.querySelectorAll("#link_menuBar")
const articles = document.querySelectorAll("#whiteArticle")
const whiteTexts = document.querySelectorAll("#whiteText")
const whiteShape = document.querySelectorAll("#whiteShape")

function temaOscuro(){
    themeButton.classList.remove(`fa-moon`)
    themeButton.classList.add(`fa-sun`)

    
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
    themeButton.classList.remove(`fa-sun`)
    themeButton.classList.add(`fa-moon`)

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


export default CambioTema
