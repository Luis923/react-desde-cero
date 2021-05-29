/* import logo from './logo.svg'; */
import React, { Fragment } from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos= [
    {
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price": 40,
        "profesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/c3e463c6-8c4f-415e-b4c4-a2e283d9a205.png"
    },
    {
        "title": "Dart desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/9e541efb-1c68-4252-ba2c-f57691a743a1.png",
        "price": 20,
        "profesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/8e0b61dd-6fb6-43e5-9028-525d9f060b64.jfif"
    },
    {
        "title": "GO desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
        "price": 30,
        "profesor": "https://edteam-media.s3.amazonaws.com/users/thumbnail/d5060642-11c9-49cb-9029-fc0a3bf8ff94.png"
    }
]

/* creamos una variable de tipo funcion, retorna un elemento html */
const App = () => (
    <Fragment>
        <div className="main-banner img-container" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="banner" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.futuroafondo.com%2Fes%2Fnoticia%2Fpictet-am-lanza-un-fondo-para-invertir-en-ciudades-inteligentes-del-futuro&psig=AOvVaw2cUnr38TL8TGwGSpctoFK3&ust=1621616008875000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjN88Tc2PACFQAAAAAdAAAAABAJ" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="#" class="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            {
                cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
            }
        </div>

    </Fragment>
)

export default App;

/*REGLAS JSX
1: Toda etiqueta debe cerrarse
2: Los compomentes deben deveolver solo un componente padre
3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
4: Fragment  =   <div> hijos </div>
5: img  siempre se cierra
6: class -> className
7: for -> htmlFor
*/
