import React from 'react';
import ReactDOM from 'react-dom/client';
import { Firstapp } from './Firstapp';
//import { App } from './Holamundo';
import './estilos.css'


const root = ReactDOM.createRoot(document.getElementById('root')) //REACT 18 YA  NO ES POSIBLE HACER EL RENDER DIRECTAMENTE
root.render(<Firstapp></Firstapp>) //REACT 18

