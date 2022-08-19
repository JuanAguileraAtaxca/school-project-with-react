import style from "./Nav.module.css";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import logo from "../.././img/logo.png";

export function Nav(){

    return (
        <nav> 
            <img className={style.ImgLogo} src={logo} />
            <NavDesktop />
            <NavMobile />
        </nav>
    );
}