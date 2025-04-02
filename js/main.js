
/*CARRUSEL DE MARCAS*/
const cinta = document.querySelector(".brands__mainContainer__slider__cinta") 
let posicion = 0;


function carrusel(){
    if(posicion <= cinta.children.length -1){
        posicion++
        cinta.style.transform=`translateX(-${posicion * 100}px)`
    }else{
        posicion = 0;
        cinta.style.transform=`translateX(0)`
    }
}
setInterval(carrusel,500)

/*CAMBIO DE TEMA(CLARO / OSCURO)*/ 
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
    themeButton.classList.remove(`fa-moon`)
    themeButton.classList.add(`fa-sun`)

    const header = document.getElementById("header")
    header.style.backgroundColor="black"

    const linksMenuBar = document.querySelectorAll("#link_menuBar")
   for(let i = 0; i<linksMenuBar.length;i++){
        linksMenuBar[i].style.color="white"
   }
}
function temaClaro(){
    themeButton.classList.remove(`fa-sun`)
    themeButton.classList.add(`fa-moon`)  
}