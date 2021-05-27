/* import logo from './logo.svg'; */
import React, { Fragment } from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

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
        <Curso></Curso>
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
