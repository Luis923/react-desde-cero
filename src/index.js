import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");

/* reactDom es la clase propia de REACT que manipula el DOM, metodo RENDER
renderiza el elemento html
primero nececita un elemento que renderizara, y el lugar donde hara esto*/
ReactDOM.render(<h1 className="saludos">hola mundo</h1>, root);

reportWebVitals();
