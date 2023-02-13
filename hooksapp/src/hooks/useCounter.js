import { useState } from 'react';

export const useCounter = (valorinicial) => {
  const [value, setValue] = useState(valorinicial) 
  
  const increment = () =>{
    setValue(value+1)
  }

  const decrement = () =>{
    setValue(value-1)
  }
  return {
    value,
    actions:[increment]
  }
}
