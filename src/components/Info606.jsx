import Card from './Card/Card'; 
import alumnos from '.././606.json'; 
import style from './Info.module.css'; 

const Info606 = () => {
    return (
        <div>
            <h1> Proyectos 606 </h1>
            <main className={style.Main}>
                <ul className={style.Ul}> 
                    {alumnos.map( element => <Card key={element.id} alumnos={element}/>)}
                </ul>
            </main>
        </div>
    ); 
}

export default Info606; 