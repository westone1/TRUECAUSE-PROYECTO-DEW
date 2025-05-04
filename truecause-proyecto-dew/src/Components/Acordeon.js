import React from "react";
import HImpactoImg1 from '../img/hImpacto-img.jpg'
import HImpactoImg2 from '../img/hiImpaco01-img.jpg'
import HImpactoImg3 from '../img/himpacto02-img.jpg'
import '../css/body/hImpacto/hImpactoBody.css'

function Acordeon() {
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button id="accordionboton" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        María Elena Torres – Educando con el Corazón
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div id="accordion-body" class="accordion-body">
                        María Elena, una maestra rural de 54 años en la sierra central del Perú, fue diagnosticada con VIH a los 39 años, tras la muerte inesperada de su esposo. Al inicio, vivió su diagnóstico en silencio, aislada por el miedo al rechazo en su comunidad. Pero su vocación por la enseñanza pudo más. Con el tiempo, comprendió que el desconocimiento era su mayor enemigo, y decidió que su historia debía servir para educar y derribar estigmas.

                        Comenzó hablando con sus alumnos adolescentes sobre salud sexual y reproductiva, luego organizó talleres comunitarios abiertos, donde incluso los padres asistían con curiosidad y miedo. Su franqueza y calidez la convirtieron en una figura de confianza. En 2017, fundó el colectivo "Convivir sin Miedo", que promueve el acceso a información científica y emocional sobre el VIH.

                        Gracias a sus esfuerzos, se implementaron campañas gratuitas de prueba rápida en su provincia y se articuló una red de promotoras comunitarias que dan seguimiento a personas diagnosticadas. Hoy, María Elena es reconocida a nivel nacional por su labor educativa. Su mensaje es claro: “Vivir con VIH no me define, pero sí me da una razón más para enseñar desde el amor y el coraje.”
                        <div>
                            <img className="image__accordion" alt="image-historias-de-impacto" src={HImpactoImg3} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button id="accordionboton" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Luis Ramírez - DJ, activista y motor de cambio
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div id="accordion-body" class="accordion-body">
                        <div>
                            <img className="image__accordion" alt="image-historias-de-impacto" src={HImpactoImg2} />
                        </div>
                        Luis, un joven DJ de 28 años de Ciudad de México, siempre soñó con cambiar el mundo a través de la música. Su vida tomó un giro inesperado cuando, a los 22 años, fue diagnosticado con VIH. Durante meses, se hundió en el silencio, temiendo la discriminación de la industria musical y de sus amigos. Pero en un evento benéfico, se inspiró al escuchar a otros activistas y decidió contar su historia públicamente desde el escenario.<br />

                        Fue entonces que nació "Beats por la Vida", un proyecto que fusiona música electrónica y activismo por la salud. Luis organizó raves comunitarios, festivales callejeros y colaboraciones con otros artistas, en los que integraba mensajes de prevención, acceso a pruebas y distribución gratuita de condones y lubricantes.<br />

                        Gracias a su plataforma, logró visibilizar el VIH entre jóvenes de barrios periféricos y barrios LGBT+ donde el acceso a información era limitado. Su campaña ha sido replicada en tres países y ha recaudado fondos para tratamientos antirretrovirales y refugios para personas seropositivas. Luis sigue pinchando música cada semana, con un lazo rojo en su camiseta y una misión clara: demostrar que la vida con VIH puede ser vibrante, activa y transformadora.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button id="accordionboton" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Claudia Méndez – Enfermera y protectora de vidas
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div id="accordion-body" class="accordion-body">
                        Claudia Méndez, enfermera bogotana de 47 años, conoce de cerca el dolor que provoca el VIH. Su hermana menor, Karina, falleció a los 32 años tras ser diagnosticada muy tarde, debido a la falta de acompañamiento emocional y miedo al estigma. Desde entonces, Claudia hizo de su profesión una cruzada personal: humanizar la atención a personas con VIH.

                        Trabajando en un hospital público del sur de Bogotá, notó que muchos pacientes no regresaban después del diagnóstico inicial. Para revertir esa realidad, propuso crear un programa de acompañamiento, donde enfermeros, psicólogos y voluntarios guiaran a cada paciente en sus primeros seis meses. También diseñó un sistema de alertas que notificaba a los equipos médicos si un paciente abandonaba el tratamiento.

                        Gracias a su empuje, el hospital redujo el abandono terapéutico en un 30% y aumentó la adherencia al tratamiento en poblaciones vulnerables, como personas trans y usuarios de drogas. Claudia no busca reconocimientos, pero cientos de pacientes le deben su estabilidad y bienestar. En sus palabras: “No curo solo con medicinas, también con tiempo, escucha y dignidad.”
                        <div>
                            <img className="image__accordion" alt="image-historias-de-impacto" src={HImpactoImg1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Acordeon;