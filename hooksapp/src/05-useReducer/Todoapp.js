import { useReducer } from 'react';
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
  return (
    <>
    <span>Todoapp</span>
    <hr></hr>
    <div className='row'>
      <div className='col-7'>
        <ul>
            <li></li>
        </ul>
      </div>
      <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr></hr>
          <form>
            <input type="text" placeholder="Agregar tarea" className="btn btn-primary"></input>
          </form>
      </div>
    </div>
    </>
  )
}
