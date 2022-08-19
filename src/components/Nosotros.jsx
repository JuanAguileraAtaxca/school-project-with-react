import {CoverPage} from './CoverPage/CoverPage';
import ImgNosotros from '.././img/4.jpg';
import {Footer} from './Footer/Footer';
import { Link } from 'react-router-dom';

const main = {
    maxWidth: "900px", 
    margin: "60px auto",
    textAlign: "justify"
}

const mainContainer = {
    padding: "30px"
}

const title = {
    fontSize: "24px", 
    textTransform: "uppercase"
}

const valorContainer = {
    display: "flex", 
    flexDirection: "column", 
    gap: "10px",
    padding: "0 30px 30px"
}

function Nosotros(){
    return (
        <div>
            <CoverPage src={ImgNosotros} text="Misión, Visión, Política de calidad" height={550}/>
            <main style={main}>
                <div style={mainContainer}>
                    <h2 style={title}> Misión </h2>
                    <p> 
                        Formar Profesionales Técnicos Bachiller altamente calificados, a través de un modelo integral: 
                        competentes para la vida y competitivos en lo profesional. Trabajamos para garantizar una educación 
                        inclusiva, equitativa y de calidad; por medio de la capacitación laboral, los servicios tecnológicos 
                        y la evaluación para la certificación de competencias, a través de la vinculación permanente con los 
                        sectores productivos y de servicios, para contribuir en la transformación y el desarrollo económico 
                        del Estado de Veracruz y de México.
                    </p>
                </div>
                <div style={mainContainer}>
                    <h2 style={title}> Visión </h2>
                    <p>
                        Ser una institución líder con enfoque local, énfasis regional y perspectiva global, en la formación 
                        de Profesionales Técnicos Bachiller de excelencia y estándares nacionales e internacionales, que satisfaga 
                        a través del saber y la innovación, las necesidades de los sectores productivos y de servicios; favoreciendo 
                        la equidad, el bienestar social y el desarrollo sostenido del país. Nos proyectamos como la mejor opción 
                        educativa de nivel medio superior, centro de capacitación, evaluación para certificación de competencias 
                        y de servicios tecnológicos elevando la productividad del Estado de Veracruz y del país.
                    </p>
                </div>
                <div style={mainContainer}>
                    <h2 style={title}> Política de calidad </h2>
                    <p>
                        En CONALEP Veracruz asumimos el compromiso en la Formación de Profesionales Técnicos Bachiller de alto 
                        nivel competitivo, a través de un modelo educativo integral fundado en valores institucionales y programas 
                        que favorecen: la inclusión, la innovación, la equidad y el bienestar, la vinculación con el sector productivo 
                        y la atención a la comunidad, sumando a ello, servicios tecnológicos, de capacitación, evaluación de competencias 
                        con fines de certificación de manera permanente.
                    </p>
                    <p>
                        Nuestra labor oportuna, pertinente, equitativa, eficaz y eficiente nos permite cumplir con las aspiraciones, 
                        necesidades y anhelos de nuestro alumnado y de la sociedad, buscando invariablemente la calidad, la mejora 
                        continua y el éxito sostenido de nuestra institución.
                    </p>
                </div>
                <div style={valorContainer}>
                    <h2 style={title}> Valores conalep </h2>
                    <p> 
                        <span>Nuestros valores institucionales:</span> Respecto a la persona, el compromiso 
                        con la sociedad, responsabilidad, comunicación, cooperación, mentalidad positiva, 
                        calidad, congruencia, equidad y superación. 
                    </p>
                    <Link className="button" to="/valores"> Leer mas </Link>
                </div>
            </main>
            <Footer />
        </div>
    ); 
}

export default Nosotros; 