

export const Todoitem = ({todo,onremoveItem,completado}) => {
  return (
    <li  className="list-group-item d-flex justify-content-between">
              <span className={`align-self-center ${todo.realizado ? 'text-decoration-line-through' : ''}`}>{todo.descripcion}</span>
              <button className="btn btn-danger" onClick={()=>onremoveItem(todo.id)}>Eliminar</button>
              <button type="button" onClick={()=>completado(todo.id)} className="btn btn-success">completado</button>
    </li>
  )
}
