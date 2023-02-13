import React, { useState } from 'react';

export const Counterapp = () => {
  const [cuenta, setCuenta] = useState(10)
  return (
    <>
    <span>Counterapp</span>
    <span>Cuenta: {cuenta}</span>
    <button>+1</button>
    </>
  )
}
