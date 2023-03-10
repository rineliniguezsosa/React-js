import PropTypes from 'prop-types'


export function Griditem({titulo,url}) {
  return (
    <div className="card">
        <img src={url} alt={titulo}></img>
        <span>{titulo}</span>
    </div>
  )
}

Griditem.propTypes = {
  titulo:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}
