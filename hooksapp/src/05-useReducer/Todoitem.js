

export const Todoitem = ({todo,onremoveItem}) => {
  return (
    <li  className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">{todo.descripcion}</span>
              <button className="btn btn-danger" onClick={()=>onremoveItem(todo.id)}>Eliminar</button>
    </li>
  )
}
