

export const TodoList = ({id,descripcion}) => {
  return (
        <ul className="list-group">
            <li key={id} className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">{descripcion}</span>
              <button className="btn btn-danger">Eliminar</button>
            </li>
        </ul>
  )
}
