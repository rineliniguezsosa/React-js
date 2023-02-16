import React, { useState } from 'react';
import { Showincrement } from './Showincrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)
  return (
    <>
    <span>CallbackHook</span>
    <hr></hr>
    </>
  )
}
