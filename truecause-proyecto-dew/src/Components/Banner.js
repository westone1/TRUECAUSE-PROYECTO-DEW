import React,{useState} from "react";
import '../css/body/inicio/banner.css';
import ImageBanner from '../img/abrazo2.jpg'
import Modal from './Modal.jsx'

function Banner(){

 

    return(
        <article id="whiteArticle" className="banner__mainContainer">
            <div className="banner__mainContainer__titleBox">
                <h1 id="whiteText">Somos la red mas grande <br/> de recaudación y apoyo para la <br/> lucha contra el VIH</h1>
                <Modal/>
            </div>
            <div className="banner__mainContainer__imageBox">
            <div id="whiteShape" className="banner__mainContainer__imageBox__shape_circle-up"></div>
                    <img src={ImageBanner} alt="abrazo-pareja"/>
                    <div id="whiteShape" className="banner__mainContainer__imageBox__shape_circle-down"></div>
            </div>
        </article>

    )

}

export default Banner


