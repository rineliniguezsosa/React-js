import { useState } from 'react';

export const useCounter = (valorinicial) => {
  const [value, setValue] = useState(valorinicial) 
  
  const increment = (valor = 1) =>{
    setValue((cuenta)=> cuenta+valor)
  }

  const decrement = (valor = 1) =>{
    setValue((cuenta)=>cuenta-valor)
  }

  const reset = () =>{
    setValue(valorinicial)
  }
  return {
    value,
    increment,
    decrement,
    reset //EXPONER METODOS
  }
}
