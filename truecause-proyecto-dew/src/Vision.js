import React from "react";
import './css/body/inicio/vision.css'
import VisionImage from './img/charity.jpg'

function Vision(){
    return(
        <article class="vision__mainContainer">
                <div class="vision__mainContainer__imageBox">
                    <div  class="vision__mainContainer__imageBox__square-up"></div>
                    <img src={VisionImage} alt=""/>
                    <div class="vision__mainContainer__imageBox__ciercle-down"></div>
                </div>
                <div class="vision__mainContainer__titleBox">
                    <h2>Visión</h2>
                    <p>Nuestra visión es clara; Ser la plataforma líder en la movilización de recursos y concienciación sobre el VIH, impulsando un cambio global a través de alianzas estratégicas <br/>con empresas y la sociedad civil</p>
                </div>
            </article>
    )
}

export default Vision