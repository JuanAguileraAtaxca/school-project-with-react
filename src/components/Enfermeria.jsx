import {CoverPage} from './CoverPage/CoverPage';
import {Footer} from './Footer/Footer'; 
import Img from '.././img/6.jpg';  
import style from './Carreras.module.css';

const Enfermeria = () => {
    return (
        <div>
            <CoverPage src={Img} text="PTB en Enfermería General" height={550}/>
            <main className={style.Main}>
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
                        Las competencias profesionales comunes de las carreras de PT-B y PT en Enfermería General son: 
                    </p>

                    <ul>
                        <li>
                            <p> 
                                Proporcionar cuidados de enfermería tanto en el medio hospitalario como extra-hospitalario,
                                con un enfoque holístico y personalizado, basado en principios éticos, legales, científicos y
                                humanísticos, tomando como referencia el proceso salud-enfermedad, el ciclo de vida y el
                                proceso de atención de enfermería que en conjunto, sustenten un modelo de atención
                                pertinente y de calidad que contribuya a la prevención y solución de problemas de salud de la persona, familia y comunidad.  
                            </p>
                        </li>
                        <li>
                            <p>
                                Realizar promoción, educación para la salud y protección específica, a través del desarrollo
                                de procedimientos y técnicas en el campo de la salud pública, utilizando como medios; el
                                proceso salud-enfermedad, la epidemiología y la estrategia de atención primaria a la salud,
                                para contribuir a resolver favorablemente problemas de tendencia sanitaria en el contexto de
                                la sociedad donde se desarrolla. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Elaborar y ejecutar el plan de cuidados de enfermería de acuerdo con su nivel de
                                responsabilidad, integrando conceptos y métodos de las ciencias médicas con elementos
                                filosóficos, teóricos, metodológicos y prácticos de enfermería, estableciendo prioridades del
                                paciente, resultados e intervenciones correspondientes con los diagnósticos de enfermería
                                para la solución de problemas de salud de la persona o grupos considerando su
                                interculturalidad y las diferentes especialidades médico-quirúrgicas, incluyendo salud mental
                                en los tres niveles de atención. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Elaborar instrumentos administrativos relacionados con la gestión de los servicios de
                                enfermería, de acuerdo con su nivel de responsabilidad, las políticas de salud vigentes y el
                                sistema de gestión de calidad, orientados a la mejora continua del proceso de atención de
                                enfermería. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Proporcionar cuidados de enfermería en situaciones críticas, de urgencia, con riesgo o en
                                crisis vital, mediante métodos y técnicas de enfermería, considerando los aspectos éticos y
                                legales que le permitan tomar decisiones desde su ámbito de competencia para favorecer la
                                recuperación de la persona y prevenir complicaciones o en caso necesario favorecer una
                                muerte digna. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Prevenir y atender adicciones mediante la promoción de estilos de vida saludable para
                                colaborar en el control y erradicación de este grave problema de salud pública. 
                            </p>
                        </li>
                    </ul>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Trayectos técnicos </h3>
                    <p>
                        Desarrollan competencias de especialización en un campo profesional específico de la carrera,
                        de acuerdo a los intereses y necesidades del campo laboral de la región donde vives.
                    </p>
                </section>

                <section className={style.Carrera}>
                    <h3 className={style.CarreraSubtitulo}> Trayectos Propedéuticos </h3>
                    <p>
                        Amplían y profundizan una formación científica, tecnológica y humanística que permita transitar
                        de manera competente al nivel superior en un área disciplinaria específica de acuerdo a sus
                        expectativas e intereses.  
                    </p>
                </section>
            </main>
            <Footer  />
        </div>
    ); 
}

export default Enfermeria; 