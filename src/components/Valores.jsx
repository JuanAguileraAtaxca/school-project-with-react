import {Footer} from './Footer/Footer';
import {CoverPage} from './CoverPage/CoverPage';  
import ImgValores from '.././img/valor.jpg';
import style from './Valores.module.css';

import { useEffect, useState } from 'react';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// imagenes 
import Respeto from '.././img/respeto-a-la-persona.jpg'; 
import Compromiso from '.././img/compromiso-con-la-sociedad.jpg'; 
import Responsabilidad from '.././img/responsabilidad.jpg'; 
import Comunicacion from '.././img/comunicacion.jpg'; 
import Cooperacion from '.././img/cooperacion.jpg'; 
import Mentalidad from '.././img/mentalidad-positiva.jpg'; 
import Calidad from '.././img/calidad.jpg'; 

const center = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
}

const left = {
    left: "10px"
}

const right = {
    right: "10px"
}

const cen = {
    display:"flex", 
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: "20px", 
    gap: "10px"
}
const Valores = () => {
    const [count, setCount] = useState(0);

    const prev = () =>{
        const number = count > 0 ? count - 1 : 6;  
        setCount(number);
    }

    const next = () => {
        const number = count < 6 ? count + 1 : 0; 
        setCount(number);
    }

    return (
        <div>
            <CoverPage src={ImgValores} text="" height={400} />
            <main className={style.Main}>
                <div style={cen}>
                    <button onClick={prev} className={style.Button} >
                        <FaAngleLeft />
                    </button>
                    <button onClick={next} className={style.Button} >
                        <FaAngleRight />
                    </button>
                </div>
                
                <div className={count === 0 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Respeto} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> Respetar al otro es respetarte a ti mismo </h2>
                        <p className={style.CardContentTextP}>
                            Consideramos a cada una de las personas como individuos dignos de atención, con
                            intereses más allá de lo estrictamente profesional o laboral. 
                        </p>
                    </div>
                </div>
                <div className={count === 1 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Compromiso} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> La sociedad: Horizonte de nuestros esfuerzos </h2>
                        <p className={style.CardContentTextP}>
                            Reconocemos a la sociedad como la beneficiaría de nuestro trabajo, considerando
                            la importancia de su participación en la determinación de nuestro rumbo. Para ello 
                            debemos atender las necesidades especificas de cada región, aprovechando las ventajas 
                            y compensando las desventajas en cada una de ellas. 
                        </p>
                    </div>
                </div>

                <div className={count === 2 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Responsabilidad} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> No esperes a que otros lo hagan por ti </h2>
                        <p className={style.CardContentTextP}>
                            Cada uno de nosotros debe responsabilizarse del resultado de su trabajo y tomar
                            propias decisiones dentro del ámbito de su competencia. 
                        </p>
                    </div>
                </div>
                <div className={count === 3 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Comunicacion} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> Información para el entendimiento, comunicación para el aprendizaje. </h2>
                        <p className={style.CardContentTextP}>
                            Fomentamos la fluidez de comunicación institucional, lo que implica claridad en la 
                            transmisión de ideas y de información, así como una actitud responsable por parte del receptor. 
                        </p>
                    </div>
                </div>
                <div className={count === 4 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Cooperacion} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> Juntos lo hacemos mejor. </h2>
                        <p className={style.CardContentTextP}>
                            El todo es más que la suma de las partes, por lo que impulsamos el trabajo en equipo
                            en equipo, respetando las diferencias, complementando esfuerzos y construyendo 
                            aportaciones de los demás. 
                        </p>
                    </div>
                </div>
                <div className={count === 5 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Mentalidad} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> El camino mas largo empieza con el primer paso. </h2>
                        <p className={style.CardContentTextP}>
                            Tenemos la disposición para enfrentar retos con una visión de éxito , considerando que siempre
                            habrá una solución para cada problema y evitando la inmovilidad ante la magnitud de la tarea a emprender.
                        </p>
                    </div>
                </div>
                <div className={count === 6 ? style.Card : style.Hidden}>
                    <div style={center}>
                        <img className={style.Img} src={Calidad} />
                    </div>
                    
                    <div className={style.CardContentText}>
                        <h2 className={style.CardContentTextH2}> La primera es la vencida. </h2>
                        <p className={style.CardContentTextP}>
                            Hacemos las cosas bien desde la primera vez, teniendo en mente a la
                            persona o área que hará uso de nuestros productos o servicios, considerando 
                            lo que necesita y cuándo lo necesita.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    ); 
}

export default Valores; 