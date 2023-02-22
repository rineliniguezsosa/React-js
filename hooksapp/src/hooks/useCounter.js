import { useState } from 'react';

export const useCounter = (valorinicial) => {
  const [value, setValue] = useState(valorinicial) 
  
  const increment = (valor = 1) =>{
    setValue((cuenta)=> cuenta+valor)
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
