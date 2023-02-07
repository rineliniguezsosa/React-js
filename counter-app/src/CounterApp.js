import PropTypes from 'prop-types'

export function CounterApp({value}) {
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