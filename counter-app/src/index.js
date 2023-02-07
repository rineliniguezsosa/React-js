import React from 'react';
import ReactDOM from 'react-dom/client';
import { Firstapp } from './Firstapp';
//import { App } from './Holamundo';
import './estilos.css'
import { CounterApp } from './CounterApp';


const root = ReactDOM.createRoot(document.getElementById('root')) //REACT 18 YA  NO ES POSIBLE HACER EL RENDER DIRECTAMENTE
root.render(<Firstapp name="rinel" edad={27}></Firstapp>) //REACT 18

