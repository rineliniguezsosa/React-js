import React, { useState } from 'react';

export const Counterapp = () => {
  const [cuenta, setCuenta] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
  })
  const { counter1,counter2,counter3} = cuenta
  return (
    <>
    <span>Counterapp</span>
    <h1>counter1 {counter1}</h1>
    <h1>counter2 {counter2} </h1>
    <h1>counter3 {counter3}</h1>


    {/* <span>Cuenta: {cuenta}</span> */}
    <button onClick={ ()=> setCuenta({
        ...cuenta,
        counter1:counter1+1,
    })}>+1</button>
    </>
  )
}
