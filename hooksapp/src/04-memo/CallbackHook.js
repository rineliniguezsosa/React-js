import React, { useState,useCallback,useEffect } from 'react';
import { Showincrement } from './Showincrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementar = () =>{
    setCounter(counter+1)
  }

  useCallback(() => {
      //useCallback memoriza una funcion
  },[],)
  
  return (
    <>
    <span>CallbackHook {counter}</span>
    <hr></hr>
    <Showincrement incrementar={incrementar}></Showincrement>
    </>
  )
}
