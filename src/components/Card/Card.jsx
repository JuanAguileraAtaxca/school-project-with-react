import User from '../.././img/usuario.png'; 
import style from './Card.module.css'; 

const Card = ({alumnos}) =>{
    return (
        <li className={style.Card}>
            <img src={User} width={"80px"}/>
            <p>{alumnos.nombre}</p>
            <a className='button' href={alumnos.link}> Proyecto </a>
        </li>
    );
}

export default Card; 