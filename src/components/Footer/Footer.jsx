import ImgFooter from '../../img/logo-footer.png'; 
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import {Link} from 'react-router-dom';
import style from './Footer.module.css';

const footer = {
    backgroundColor: "var(--footer)", 
    color: "white",
    padding: "100px 50px 30px"
}

const footerChild = {
    maxWidth: "800px", 
    margin: "0 auto",
}

const logo = {
    width: "100px"
}

const sizeIcon = {
    fontSize: "25px"
}

const down = {
    borderTop: "2px solid white", 
    borderBottom: "2px solid white"
}

const downSubMenu = {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "flex-start",
    color: "white"
}

const color = {
    color: "white",
    fontSize: "18px",
    padding: "7px"
}

const footerChildContent = {
    display: "flex",
    flexDirection: "column", 
    gap: "15px"
}

export const Footer = () => {
    return (
        <footer style={footer}>
            <div style={footerChild}>
                <div style={footerChildContent}>
                    <div>
                        <img style={logo} src={ImgFooter}/>
                    </div>
                    <div className={style.FooterData}>
                        <div>
                            <p> <span style={sizeIcon}> <FaPhone /> </span> 294 942 1399, 294 942 2838 </p>
                        </div>
                        <div>
                            <p> <span style={sizeIcon}> <FaRegEnvelope /> </span> direccion201@ver.conalep.edu.mx </p>
                        </div>
                        <div>
                            <p> <span style={sizeIcon}> <FaMapMarkerAlt/> </span> Av. Dr. Guillermo Figueroa Cárdenas s/n Col. Buenavista </p>
                        </div>
                    </div>
                </div>
                <div style={down} className={style.Down}>
                    <div style={downSubMenu}>
                        <h3> Conalep </h3>
                        <Link style={color} to='/'> Inicio </Link>
                        <Link style={color} to='/nosotros'> Nosotros </Link> 
                        <Link style={color} to='/contacto'> Contacto </Link>
                    </div>
                    <div style={downSubMenu}>
                        <h3> Dirección </h3> 
                        <p> Av. Dr. Guillermo Figueroa Cárdenas s/n Col. Buenavista </p>
                        <p> San Andrés Tuxtla, ver, C.P. 95790 </p>
                    </div>
                </div>
                <p style={{textAlign: "center"}}> Copyright © 2022 Juan José Aguilera Ataxca • aguileraataxca@gmail.com </p>
            </div>
        </footer>
    );
}