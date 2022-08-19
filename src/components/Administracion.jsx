import {Footer} from './Footer/Footer';
import {CoverPage} from './CoverPage/CoverPage';
import Img from '.././img/6.jpg'; 
import style from './Carreras.module.css'; 

const Administracion = () => {
    return (
        <>
            <CoverPage src={Img} text="PTB en Administración" height={550} />
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
                        Las competencias profesionales comunes de las carreras de PT-B y PT en Administración son: 
                    </p>

                    <ul>
                        <li>
                            <p> Elaborar documentación administrativa, mercantil y contable, empleando la normatividad
                                legal vigente y las políticas establecidas por la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Aplicar el proceso administrativo, de acuerdo con el tipo de actividad que desarrolle para coadyuvar 
                                a la efectividad productiva de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar las actividades de crédito y cobranza, mediante la aplicación de normas legales,
                                procedimientos y políticas para eficientar el proceso de control y seguimiento de las cuentas
                                por cobrar de una organización.
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar la información financiera, comercial, de recursos humanos y materiales de la
                                empresa, aplicando software contable- administrativo para su control. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar almacenes e inventarios de productos y materiales, a través de normas legales,
                                métodos, técnicas y procedimientos de control establecidos, para coadyuvar a eficientar el
                                proceso productivo de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Aplicar estándares de calidad en todas las actividades que realiza, para coadyuvar en la
                                eficiencia del proceso productivo de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Controlar los activos fijos de la empresa, aplicando procedimientos y métodos de
                                depreciación y reexpresión, para coadyuvar con eficiencia en las inversiones de la
                                organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Elaborar y administrar presupuestos, de acuerdo con las políticas, técnicas, procedimientos
                                y metodologías establecidas, para el control de los ingresos y egresos de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar el sistema de comercialización, aplicando procedimientos de compra-venta,
                                normas gubernamentales y métodos de control para la operación efectiva de los ingresos y
                                egresos de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar el proceso de producción, aplicando métodos de control de actividades, de
                                recursos y de la capacidad instalada, para la operación eficiente y competitiva de la
                                organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Aplicar estrategias de promoción de la mezcla de mercadotecnia, para posicionar los bienes
                                y servicios de una organización, contribuyendo con ello, a su competitividad en los mercados
                                nacional e internacional.
                            </p>
                        </li>
                        <li>
                            <p>
                                Realizar cálculos matemáticos, aplicando técnicas y procedimientos financieros para la
                                obtención de datos e información que coadyuve a la toma de decisiones de la organización. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Administrar el sistema de recursos humanos, mediante el control del proceso de
                                reclutamiento, selección, contratación, inducción y desarrollo del personal establecido por la
                                empresa. 
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
            <Footer />
        </>
    );
}

export default Administracion; 