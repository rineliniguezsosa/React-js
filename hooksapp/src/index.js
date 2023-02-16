import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './04-memo/MemoHook';
//import { FocusScreen } from './03-useRef/FocusScreen';
import { Memorize } from './04-memo/Memorize';
//import { MultipleCustomHook } from './components/MultipleCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { Counterapp } from './01-useState/Counterapp';
//import { CounterCustomHook } from './components/CounterCustomHook';
//import { Hookapp } from './components/Hookapp';
// import { FormCustomHook } from './components/FormCustomHook'
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Memorize></Memorize>
    // </React.StrictMode>
)
