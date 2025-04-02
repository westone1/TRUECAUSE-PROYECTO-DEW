const cinta = document.querySelector(".brands__mainContainer__slider__cinta")
let posicion = 0;


function carrusel(){
    console.log(cinta.children)
    if(posicion <= cinta.children.length -1){
        posicion++
        cinta.style.transform=`translateX(-${posicion * 100}px)`
    }else{
        posicion = 0;
        cinta.style.transform=`translateX(0)`
    }
}
setInterval(carrusel,500)