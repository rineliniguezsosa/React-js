import { useState } from 'react';

export const useCounter = (valorinicial) => {
  const [value, setValue] = useState(valorinicial) 
  
  const increment = () =>{
    setValue(value+1)
  }

  const decrement = () =>{
    setValue(value-1)
  }

  const reset = () =>{
    setValue(valorinicial)
  }
  return {
    value,
    actions:[increment,decrement,reset] //EXPONER METODOS
  }
}
