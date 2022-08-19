import style from './Radio.module.css'; 

import {FaPodcast} from 'react-icons/fa';
const Radio = () => {
    return (
        <a className={style.Ball + " center"} href="http://radio.conalepsat.com/"> <FaPodcast /> </a>
    ); 
}

export default Radio; 