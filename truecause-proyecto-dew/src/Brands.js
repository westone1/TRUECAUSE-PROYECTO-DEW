import React from "react";
import './css/body/inicio/brands.css'
import ImageBrands from './img/abrazo.jpg'

function Brands() {
    return (
        <article className="brands__mainContainer">
            <div className="brands__mainContainer__titleBox">
                <h2>Conectamos marcas que <br /> sienten que realmente se <br /> puede hacer algo</h2>
                <div class="brands__mainContainer__slider">
                    <div class="brands__mainContainer__slider__cinta">
                    
                    </div>
                </div>
            </div>
            <div class="brands__mainContainer__imageBox">
                    <div class="brands__mainContainer__imageBox__shape_circle-up"></div>
                    <img src={ImageBrands} alt=""/>
                    <div class="brands__mainContainer__imageBox__shape_circle-down"></div>
                </div>

        </article>
    )


}

export default Brands

/*
     <article class="brands__mainContainer">
                <div class="brands__mainContainer__titleBox">
                    <h2>Conectamos marcas que <br> sienten que realmente se <br> puede hacer algo</h2>
                    <div class="brands__mainContainer__slider">
                        <div class="brands__mainContainer__slider__cinta">
                            <img id="brand_logo" src="img/logo1.png" alt="logo-samsung">
                            <img id="brand_logo" src="img/logo2.png" alt="logo-adidas">
                            <img id="brand_logo" src="img/logo3.png" alt="logo-visa">
                            <img id="brand_logo" src="img/logo4.png" alt="logo-nike">
                            <img id="brand_logo" src="img/logo5.png" alt="logo-starbucks">
                            <img id="brand_logo" src="img/logo6.png" alt="logo-fedex">
                            <img id="brand_logo" src="img/logo7.png" alt="logo-disney">
                            <img id="brand_logo" src="img/logo8.png" alt="logo-lacoste">
                            <img id="brand_logo" src="img/logo9.png" alt="logo-chanel">
                            <img id="brand_logo" src="img/logo10.png" alt="logo-audi">
                            <img id="brand_logo" src="img/logo1.png" alt="logo-samsung">
                            
                        </div>
                    </div>
                </div>
                <div class="brands__mainContainer__imageBox">
                    <div class="brands__mainContainer__imageBox__shape_circle-up"></div>
                    <img src="img/abrazo.jpg" alt="">
                    <div class="brands__mainContainer__imageBox__shape_circle-down"></div>
                </div>
            </article>
*/ 