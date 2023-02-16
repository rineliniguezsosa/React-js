import React, { useState } from 'react';
import { Showincrement } from './Showincrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementar = () =>{

  }
  return (
    <>
    <span>CallbackHook {counter}</span>
    <hr></hr>
    <Showincrement incrementar={incrementar}></Showincrement>
    </>
  )
}
