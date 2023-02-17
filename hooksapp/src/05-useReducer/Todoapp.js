import { useReducer } from 'react';
import { Todoadd } from './Todoadd';
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
          <Todoadd/>
      </div>
    </div>
    </>
  )
}
