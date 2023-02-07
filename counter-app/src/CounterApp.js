import PropTypes from 'prop-types'
import React, { useState } from 'react';


export function CounterApp({value}) {

  const [myvalue, setValue] = useState(value)

  const HandleAdd = () =>{
    
  }
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>   

        <button onClick={HandleAdd}>+1</button> 
    </>
  )
}

CounterApp.propTypes = {
    value:PropTypes.number,
}