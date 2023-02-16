import React, { useState,useCallback,useEffect } from 'react';
import { Showincrement } from './Showincrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

//   const incrementar = () =>{
//     setCounter(counter+1)
//   }

  const incrementarFather = useCallback((value) => {
      //useCallback memoriza una funcion
      setCounter(counter+1)
  },[counter],)
  
   useEffect(() => {
  }, [incrementarFather])
  return (
    <>
    <span>CallbackHook {counter}</span>
    <hr></hr>
    <Showincrement incrementar={incrementarFather}></Showincrement>
    </>
  )
}
