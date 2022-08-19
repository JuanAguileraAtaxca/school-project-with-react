import {CoverPage} from './CoverPage/CoverPage';
import {Footer} from './Footer/Footer'; 
import style from './Carreras.module.css'; 
import Img from '.././img/6.jpg';  
import { FaBook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const proyectoTitulo = {
    textAlign: "center", 
    textTransform: "uppercase", 
    fontSize: "24px"
}

const Informatica = () => {
    return (
        <div>
            <CoverPage src={Img} text="PTB en Informática" height={550}/>
            <main className={style.Main}>
                <section className='center'>
                    <Link className="button" to="#proyectos"> proyectos </Link>
                </section>
                <section className={style.Carrera}>
                    <h2 className={style.CarreraTitulo}> Perfil de egreso </h2>
                    <p>
                        Al egresar, habrás obtenido las competencias que te brindarán una formación integral para
                        incorporarte a la vida cotidiana, así como desempeñarte en diferentes ambientes laborales,
                        ejerciendo la toma de decisiones con una actitud crítica, creativa, ética y responsable, y
                        participando activamente en el mercado productivo con desempeño competitivo en el mundo
                        del trabajo. Adicionalmente, si tú así lo decides, contarás con las competencias necesarias
                        para el acceso a la educación superior, en cualquiera de los cuatro campos disciplinares que
                        ofrece el Colegio. Para lograr esto, se promueve el desarrollo de las siguientes: 
                    </p>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Competencias genéricas: </h3>
                    <p>
                        Permiten un desempeño eficaz y autónomo en los ámbitos personal, social, profesional y
                        político a lo largo de la vida en diversos contextos. Son pertinentes para la vida y en todos los
                        campos del saber y del quehacer profesional. 
                    </p>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Competencias disciplinares: </h3>
                    <p>
                        Dan continuidad a las competencias desarrolladas en el nivel educativo precedente, se
                        desarrollan en torno a áreas del conocimiento y en el contexto de la tecnología. También
                        contribuyen, desde su lógica y estructura disciplinar, para la comprensión y explicación del
                        quehacer profesional. 
                    </p>
                </section>
                
                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Competencias profesionales:  </h3>
                    <p>
                        Combinan el saber, el saber- hacer y el saber ser, necesarios para un desempeño eficiente y
                        oportuno en el mundo del trabajo, que posibilitan para enfrentar nuevas situaciones,
                        adaptándose a ellas a través de la movilización y articulación de todos los saberes que se
                        adquieren.
                    </p>

                    <p>
                        Las competencias profesionales comunes de las carreras de PT-B y PT en Informatica son: 
                    </p>

                    <ul>
                        <li>
                            <p> 
                                Procesar y comunicar información, utilizando herramientas avanzadas para la elaboración 
                                de documentos digitales, para la expresión de ideas/proyectos y distribución de información. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Analizar requerimientos de procesamiento y sistematización de información de áreas específicas 
                                considerando los requisitos del usuario para atender necesidades organizacionales. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Diseñar y desarrollar proyectos de tecnología de información, para la generación 
                                de alternativas de solución, de los requerimientos del usuario.
                            </p>
                        </li>
                        <li>
                            <p>
                                Implementar proyectos de software aplicativo para la automatización de procesos de la 
                                organización, cumpliendo con los requisitos definidos. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Dar mantenimiento a software y/o Tecnologías de Información y Comunicación (TIC) y 
                                asistencia a usuarios, aplicando estándares y mejores prácticas en soporte técnico para conservar la disponibilidad y desempeño de dichos recursos.
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar  áreas  de  tecnologías  de  información  y  comunicación,  de  acuerdo 
                                con  las  políticas  y estándares de operación y gestión informática, para brindar 
                                servicios de procesos automatizados de información en una organización 
                            </p>
                        </li>
                    </ul>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Trayectos técnicos </h3>
                    <p>
                        Desarrollan  competencias  de  especialización  en  un  campo  profesional  
                        específico  de  la  carrera,  de acuerdo a los intereses y necesidades del 
                        campo de trabajo de la región.
                    </p>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Trayectos Propedéuticos </h3>
                    <p>
                        Amplían y profundizan una formación científica, tecnológica y humanística para 
                        preparar a los alumnos que  decidan  obtener  el  título  de  PT  Bachiller, 
                        posibilitando  el  ingreso  al  nivel  superior,  mediante la elección de un 
                        trayecto propedéutico integrado por módulos con un nivel de complejidad mayor 
                        a los módulos  de  la  formación  básica,  en  alguna  de  las  siguientes  
                        áreas  del  conocimiento:  Físico-Matemáticas, Económico-Administrativas, 
                        Químico-Biológicas o Socio-Humanísticas, de acuerdo a sus expectativas e intereses
                        formativos. En estos trayectos se desarrollan las competencias disciplinares 
                        extendidas del Marco Curricular Común, en función del Trayecto Propedéutico elegido.  
                    </p>
                </section>

                <section className={style.Carrera} id="proyectos">
                    <h2 style={proyectoTitulo}> Proyectos </h2>
                    <div className={style.Proyecto}>
                        <Link className={style.Link} to="/info-605"> 
                            <div> <span className={style.IconProjects}> <FaBook /></span></div>
                            <h2 className={style.CarreraTitulo}> INFO 605 </h2>
                        </Link>

                        <Link className={style.Link} to="/info-606">
                            <div> <span className={style.IconProjects}> <FaBook /> </span></div>
                            <h2 className={style.CarreraTitulo}> INFO 606 </h2>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    ); 
}

export default Informatica; 