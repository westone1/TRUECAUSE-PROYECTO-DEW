import React from "react";
import { useEffect } from "react"; 

function Carrusel(){

    useEffect(()=>{
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
    },[]);
    return null
}

export default Carrusel