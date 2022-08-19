import {CoverPage} from './CoverPage/CoverPage';
import ImgIndex from ".././img/1.jpg";
import ImgHero from ".././img/3.jpg";
import style from "./Index.module.css";
import {Footer} from './Footer/Footer';
import { Link } from 'react-router-dom';

const video = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center"
}

const heroParent = {
    position: "relative", 
    width: "100%",
    height: "350px",
    backgroundImage: `url(${ImgHero})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center"
}

const heroChild = {
    position: "absolute", 
    width: "100%", 
    height: "100%", 
    backgroundColor: "rgb(0,0,0,0.5)", 
    color: "white",
    padding: "20px"
}

function Index(){
    return (
        <div>
            <CoverPage src={ImgIndex} text="Plantel Dr. Guillermo Figueroa Cárdenas, 201." height={550}/>
            <main className={style.Main}>
                <div className={style.MainDiv}>
                    <div>
                        <h2> Bienvenido o bienvenida </h2>
                        <p>
                            Conalep sat te da la bienvenida a la pagina, donde podrás conocer algunos datos basicos
                            como la misión, visión, política de calida y valores, asimismo, las carreras disponibles en el plantel. 
                        </p>
                    </div> 
                    <div style={video}>
                        <iframe 
                            src="https://www.youtube.com/embed/FAq6AeHNcaA" height={200} width={"90%"}>
                        </iframe>
                    </div>
                </div>
            </main>
            <div className={style.Mision}>
                <h2> Misión </h2> 
                <p>
                    Formar Profesionales Técnicos Bachiller altamente calificados, a través de un modelo integral: 
                    competentes para la vida y competitivos en lo profesional. Trabajamos para garantizar una educación 
                    inclusiva, equitativa y de calidad; por medio de la capacitación laboral, los servicios tecnológicos 
                    y la evaluación para la certificación de competencias, a través de la vinculación permanente con los 
                    sectores productivos y de servicios, para contribuir en la transformación y el desarrollo económico 
                    del Estado de Veracruz y de México.
                </p>
                <Link className='button' to="/nosotros"> Leer mas </Link>
            </div>
            <div style={heroParent}>
                <div className="center" style={heroChild}>
                    <h2> ¿Necesitas información? </h2>
                    <h3 style={{textAlign: "center"}}> Unete al plantel Dr. Guillermo Figueroa Cárdenas, 201. </h3>
                    <Link className="button" to="/contacto"> Contacto </Link>
                    
                </div>
            </div>
            <Footer />
        </div>
    ); 
}

export default Index; 