import { useReducer } from 'react';
import { TodoList } from './TodoList';
import { reducer } from './TodoReducer';

export function Todoapp() {
  const initialState = [
    {
    id:new Date().getDate(),
    descripcion:'tomar el curso de js',
    realizado:true
    }
] 
  const [state, dispatch] = useReducer(reducer,initialState)
  console.log(dispatch)
  return (
    <>
    <span>Todoapp</span>
    <hr></hr>
    <div className='row'>
      <div className='col-7'>
        {
        state.map(datos => (
          <TodoList id={datos.id} descripcion={datos.descripcion} />
        ))
        }
      </div>
      <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr></hr>
          <form>
            <input type="text" className='form-control' placeholder="Agregar tarea"></input>

            <button className="btn btn-primary" type="submit">Agregar</button>
          </form>
      </div>
    </div>
    </>
  )
}
