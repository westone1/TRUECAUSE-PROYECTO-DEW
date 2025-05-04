import React from "react";
import HImpactoImg from '../img/hImpacto-img.jpg'

function BannerHImpacto(){
    return(
        <article id="whiteArticle" className="banner__mainContainer">
        <div className="banner__mainContainer__titleBox">
            <h1 id="whiteText">Voces que Inspiran:<br/>Historias de Esperanza<br/>en la Lucha contra el VIH</h1>
        </div>
        <div className="banner__mainContainer__imageBox">
        <div id="whiteShape" className="banner__mainContainer__imageBox__shape_circle-up"></div>
                <img src={HImpactoImg} alt="abrazo-pareja"/>
                <div id="whiteShape" className="banner__mainContainer__imageBox__shape_circle-down"></div>
        </div>
    </article>


    )

}
export default BannerHImpacto