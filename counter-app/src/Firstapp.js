import PropTypes from 'prop-types'

export function Firstapp({name,edad}) {
//   const obj = {
//     name:'rinel',
//     email:'rineliniguezsosa@gmail.com'
//   }
  return (
    <>
        {/* <h1>Rinel</h1> */}
        <span>{name}</span>
        <span>{edad}</span>
        {/* <p>{JSON.stringify(obj)}</p> */}
    </>
  )
}

Firstapp.propTypes = {
    name:PropTypes.string,
    edad:PropTypes.number
}

Firstapp.defaultProps = {
    name:'rinel iñiguez sosa',
    edad:23,
}
