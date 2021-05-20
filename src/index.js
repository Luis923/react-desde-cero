import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = document.getElementById("root");

/* reactDom es la clase propia de REACT que manipula el DOM, metodo RENDER
renderiza el elemento html
primero nececita un elemento que renderizara, y el lugar donde hara esto*/
ReactDOM.render(<App/>, root); /* todo los componentes en react se encierran de este modo */

reportWebVitals();
