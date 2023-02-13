import React, { useState } from 'react';

export const useCounter = (valorinicial) => {
  const [value, setValue] = useState(valorinicial)  
  return {
    value,
  }
}
