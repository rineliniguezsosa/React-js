import { Todoitem } from "./Todoitem"



export const TodoList = ({state = [],onremoveItem,completado}) => {
  return (
        <ul className="list-group">
            {state.map(data => (
            // <li key={data.id} className="list-group-item d-flex justify-content-between">
            //   <span className="align-self-center">{data.descripcion}</span>
            //   <button className="btn btn-danger">Eliminar</button>
            // </li>
            <Todoitem onremoveItem={onremoveItem} key={data.id} todo={data}></Todoitem>
            ))
            }
        </ul>
  )
}
