import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counterapp } from './01-useState/Counterapp';
//import { Hookapp } from './components/Hookapp';
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Counterapp></Counterapp>
    </React.StrictMode>
)
