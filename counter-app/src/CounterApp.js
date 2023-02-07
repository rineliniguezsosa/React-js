import PropTypes from 'prop-types'
import React, { useState } from 'react';


export function CounterApp({value}) {

  const [myvalue, setValue] = useState(value)

  const HandleAdd = () =>{
    setValue(myvalue+1)
  }

  const handlesubstract = () =>{
    setValue(myvalue-1)
  }

  const handlereset = () =>{
    
  }
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{myvalue}</h2>   

        <button onClick={HandleAdd}>+1</button> 
        <button onClick={handlesubstract}>-1</button>
        <button onClick={handlereset}>reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value:PropTypes.number,
}