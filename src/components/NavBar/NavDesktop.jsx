import style from "./Nav.module.css";
import {Link} from 'react-router-dom'; 


export function NavDesktop(){
    return (
        <ul className={style.Desktop}>
            <li> <Link className={style.DesktopLink} to="/"> Inicio </Link> </li>
            <li className={style.DesktopSub}> 
                <a className={style.DesktopLink} href="#"> Institucional </a>
                <ul className={style.DesktopSubMenu}>
                    <li> <Link to="/nosotros"> Nosotros </Link> </li>
                    <li> <Link to="/valores"> Valores </Link> </li>
                </ul>
            </li>
            <li className={style.DesktopSub}>
                <a className={style.DesktopLink} href="#"> Oferta Educativa  </a>
                <ul className={style.DesktopSubMenu}>
                    <li> <Link to="/informatica"> PTB en informática </Link> </li>
                    <li> <Link to="/administracion"> PTB en Administración </Link> </li> 
                    <li> <Link to="/enfermeria"> PTB en Enfermería general </Link></li>
                </ul>
            </li>
            <li> <Link className={style.DesktopLink} to="/contacto"> Contacto </Link></li>
        </ul>
    ); 
}