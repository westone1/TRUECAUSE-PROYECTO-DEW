import React,{useEffect,useRef} from "react";
import './css/body/inicio/brands.css'
import ImageBrands from './img/abrazo.jpg'
import ImgLogo1 from './img/logo1.png'
import ImgLogo2 from './img/logo2.png'
import ImgLogo3 from './img/logo3.png'
import ImgLogo4 from './img/logo4.png'
import ImgLogo5 from './img/logo5.png'
import ImgLogo6 from './img/logo6.png'
import ImgLogo7 from './img/logo7.png'
import ImgLogo8 from './img/logo8.png'
import ImgLogo9 from './img/logo9.png'


function Brands() {
    const cintaRef = useRef(null);
    let posicion = 0;

    useEffect(() => {
        const carrusel = () => {
            const cinta = cintaRef.current;
            if (cinta && cinta.children.length > 0) {
                if (posicion < cinta.children.length - 1) {
                    posicion++;
                    cinta.style.transform = `translateX(-${posicion * 100}px)`;
                } else {
                    posicion = 0;
                    cinta.style.transform = `translateX(0)`;
                }
            }
        }

        setInterval(carrusel, 500);

        
    }, []);


    return (
        <article className="brands__mainContainer">
            <div className="brands__mainContainer__titleBox">
                <h2>Conectamos marcas que <br/> sienten que realmente se <br/> puede hacer algo</h2>
                <div className="brands__mainContainer__slider">
                    <div className="brands__mainContainer__slider__cinta" ref={cintaRef}>
                        <img className="brand_logo" src={ImgLogo1}/>
                        <img className="brand_logo" src={ImgLogo2}/>
                        <img className="brand_logo" src={ImgLogo3}/>
                        <img className="brand_logo" src={ImgLogo4}/>
                        <img className="brand_logo" src={ImgLogo5}/>
                        <img className="brand_logo" src={ImgLogo6}/>
                        <img className="brand_logo" src={ImgLogo7}/>
                        <img className="brand_logo" src={ImgLogo8}/>
                        <img className="brand_logo" src={ImgLogo9}/>
                        <img className="brand_logo" src={ImgLogo1}/>
                    </div>
                </div>
            </div>
            <div className="brands__mainContainer__imageBox">
                <div className="brands__mainContainer__imageBox__shape_circle-up"></div>
                <img src={ImageBrands} alt="" />
                <div className="brands__mainContainer__imageBox__shape_circle-down"></div>
            </div>

        </article>
    )


}

export default Brands
