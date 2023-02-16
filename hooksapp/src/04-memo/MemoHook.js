import { useCounter } from "../hooks/useCounter"
import { useState } from 'react';

const Heavyprocess = (numero) =>{
    for (let index = 0; index < numero; index++) {
        console.log(numero) 
    }
    return `${numero} iteraciones`;
}

export const MemoHook= () => {
  const {value,actions} = useCounter(4000)
  const [increment] = actions
  const [show, setShow] = useState(true)
  return (
    <>
    <h1>Memorize {value}</h1>
    <hr></hr>
    <h2>{Heavyprocess(value)}</h2>
    <button onClick={increment} className="btn btn-primary">+1</button>
    {/* 
        contexto: por cada cambio en el state react actualiza el dom 

        si en el componente PADRE <Memorize/> sucede una nueva actualizacion 
        y en el componente hijo <Small/> no tiene nada que ver con el cambio sucedido 
        entonces por lo cual react no deberia de renderizarse de nueva cuenta el componente 
        <Small/>
    */}
    {JSON.stringify(show)}
     <button onClick={()=> setShow(!show)} className="btn btn-primary">Muestra</button>
    </>
  )
}
