import { useReducer } from 'react';
import { Todoadd } from './Todoadd';
import { TodoList } from './TodoList';
import { reducer } from './TodoReducer';
import { useEffect } from 'react';
import { useTodo } from '../hooks/useTodo';



export function Todoapp() {
  const initialState = [
    // {
    // id:new Date().getTime(),
    // descripcion:'tomar el curso de js',
    // realizado:true
    // }
] 
  const init = () =>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
  }
  const [state, dispatch] = useReducer(reducer,initialState,init)
  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(state))
  }, [state])
  

  const removeItem = (id) =>{
    const action = {
      type:'eliminar',
      payload:id,
    }
    dispatch(action)
  }

  const tareacompletada = (id) =>{
    const action = {
      type:'completado',
      payload:id,
    }
    dispatch(action)
  }

  return (
    <>
    <span>Todoapp</span>
    <hr></hr>
    <div className='row'>
      <div className='col-7'>
          <TodoList state={state} onremoveItem={removeItem} completado={tareacompletada}/>
      </div>
      <div className='col-5'>
          <h4>Agregar todo</h4>
          <hr></hr>
          <Todoadd onNewTodo={handleform}/>
      </div>
    </div>
    </>
  )
}
