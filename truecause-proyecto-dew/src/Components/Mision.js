import React from "react";
import '../css/body/inicio/mision.css'
import ImageVision from '../img/donation.jpg'

function Mision(){
    return(
        <article id="whiteArticle" class="mision__mainContainer">
                <div class="mision__mainContainer__titleBox">
                    <h2 id="whiteText">Misión</h2>
                    <p id="whiteText">Tenemos como misión conectar marcas <br/> comprometidas con la responsabilidad social,<br/> con personas y organizaciones que <br/> luchan contra el VIH, facilitando la recaudación <br/> de fondos para tratamientos, educación y prevención</p>
                </div>
                <div class="mision__mainContainer__imageBox">
                    <img src={ImageVision} alt=""/>
                </div>
            </article>
    )
}
export default Mision
