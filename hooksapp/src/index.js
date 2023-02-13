import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Counterapp } from './01-useState/Counterapp';
import { CounterCustomHook } from './components/CounterCustomHook';
//import { Hookapp } from './components/Hookapp';
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterCustomHook></CounterCustomHook>
    </React.StrictMode>
)
