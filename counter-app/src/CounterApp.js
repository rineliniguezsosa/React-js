import PropTypes from 'prop-types'

export function CounterApp({value}) {
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>    
    </>
  )
}

CounterApp.propTypes = {
    value:PropTypes.number,
}