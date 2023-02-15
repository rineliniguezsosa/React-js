import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"
import { useState } from 'react';

export const Memorize = () => {
  const {value,actions} = useCounter(1)
  const [increment] = actions
  return (
    <>
    <h1>Memorize <Small value={value}></Small></h1>
    <hr></hr>
    <button onClick={increment} className="btn btn-primary">+1</button>
    {/* 
        contexto: por cada cambio en el state react actualiza el dom 

        si en el componente PADRE <Memorize/> sucede una nueva actualizacion 
        y en el componente hijo <Small/> no tiene nada que ver con el cambio sucedido 
        entonces por lo cual react no deberia de renderizarse de nueva cuenta el componente 
        <Small/>
    */}
    </>
  )
}
