import React from "react";
import HappyPeople from '../img/happy-people.jpg'
import '../css/body/hImpacto/inspirationSection.css'

function InspirationSection() {
    return (
        <section className="inspiration-section">
            <div className="inspiration-content">
                <h2>Voces que sanan el alma</h2>
                <div className="inspiration-content__descriptionBox">
                    <div className="inspiration-content__descriptionBox__card" >
                        <p>
                            Escuchar historias de quienes enfrentaron el VIH con valentía nos conmueve y nos transforma.
                            Son relatos de fuerza, amor y dignidad que rompen el silencio, desafían los prejuicios y nos inspiran
                            a mirar la vida con más compasión.
                            <br />
                            Cada testimonio es una chispa de esperanza que ilumina el camino hacia una sociedad más empática,
                            donde nadie se sienta solo ni invisible. Porque detrás de cada diagnóstico hay una historia que merece
                            ser contada… y escuchada.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default InspirationSection;