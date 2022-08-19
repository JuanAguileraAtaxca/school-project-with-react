import {CoverPage} from './CoverPage/CoverPage'; 
import ImgContacto from '.././img/5.jpg';
import {Footer} from './Footer/Footer'; 
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import style from './Contacto.module.css';

const Contacto = () => {
    return (
        <>
            <CoverPage src={ImgContacto} text="Contacto" height={550} />
            <main className={style.Main}>
                <div>
                    <h2> Contactanos </h2>
                    <p> Puedes contactarnos por algunos de estos medios </p>

                    <div>
                        <h3> <span className={style.Icon}><FaPhone /></span> Telefonos </h3> 
                        <p> 294 942 1399, 294 942 2838 </p>
                    </div>

                    <div>
                        <h3> <span className={style.Icon}> <FaRegEnvelope /> </span> Correos </h3> 
                        <p> direccion201@ver.conalep.edu.mx </p>
                    </div>

                    <div>
                        <h3> <span className={style.Icon}> <FaMapMarkerAlt /> </span> Ubicación </h3> 
                        <p> Av. Dr. Guillermo Figueroa Cárdenas s/n Col. Buenavista </p>
                        <p> San Andrés Tuxtla, ver, C.P. 95790 </p>
                    </div>
                </div>
                <div>
                    <h2> Mándanos tu mensaje </h2>
                    <form className={style.Form}>
                        
                        <div>
                            <label> Nombre: </label>
                            <input type="text" placeholder='escribe tu nombre'/>
                        </div>
                        <div>
                            <label> Correo: </label>
                            <input type='email' placeholder='escribe tu correo'/>
                        </div>
                        <div>
                            <label> Telefono: </label> 
                            <input type="tel" placeholder='escribe tu número de telefono'/> 
                        </div> 
                        <div>
                            <label> Mensaje: </label> 
                            <textarea placeholder='escribe tu mensaje'></textarea>
                        </div>
                        <input type="submit" value="enviar" className='button' />
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contacto; 