import React, { useState } from 'react';

export const useCounter = (0) => {
  const [value, setValue] = useState(0)  
  return {
    value,
  }
}
