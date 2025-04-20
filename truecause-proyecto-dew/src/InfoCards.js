import React from "react";
import './css/body/inicio/infoCards.css'
import InfocardImageTiempo from './img/time-white-removebg-preview.png'
import InfoCardImageMoney from './img/money-white-removebg-preview.png'
import InfocardImageMoney from './img/bank-white-removebg-preview.png'
function Infocards() {
    return (
        <>
            <h2 className="infoCards__tittle">Como ayudar</h2>
            <div class="infoCards__mainContainer">
                <div className="infoCards__mainContainer_card">
                    <img src={InfoCardImageMoney} alt="" />
                    <p>Aporta con lo que puedas a través de nuestros canales digitales. Cada contribución, grande o pequeña, suma esperanza y cambia vidas.</p>
                </div>
                <div className="infoCards__mainContainer_card">
                    <img src={InfocardImageTiempo} alt="" />
                    <p>Tu tiempo también es valioso. Únete como voluntario en nuestras campañas, eventos o actividades de sensibilización. Tu presencia genera impacto.</p>
                </div>
                <div className="infoCards__mainContainer_card">
                    <img src={InfocardImageMoney} alt="" />
                    <p>Si representas una empresa o institución, podemos construir juntos iniciativas que transformen realidades. Tu marca puede ser parte del cambio.</p>
                </div>
            </div>
        </>
    )
}

export default Infocards






