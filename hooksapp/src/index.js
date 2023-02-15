import React from 'react';
import ReactDOM from 'react-dom/client';
import { FocusScreen } from './03-useRef/FocusScreen';
//import { MultipleCustomHook } from './components/MultipleCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { Counterapp } from './01-useState/Counterapp';
//import { CounterCustomHook } from './components/CounterCustomHook';
//import { Hookapp } from './components/Hookapp';
// import { FormCustomHook } from './components/FormCustomHook'
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <FocusScreen></FocusScreen>
    // </React.StrictMode>
)
