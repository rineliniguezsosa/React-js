

export const Todoitem = ({todo}) => {
  return (
    <li  className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">{todo.descripcion}</span>
              <button className="btn btn-danger">Eliminar</button>
    </li>
  )
}
