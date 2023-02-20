import { useReducer } from 'react';
import { Todoadd } from './Todoadd';
import { TodoList } from './TodoList';
import { reducer } from './TodoReducer';
import { useEffect } from 'react';


export function Todoapp() {
  const initialState = [
    {
    id:new Date().getTime(),
    descripcion:'tomar el curso de js',
    realizado:true
    }
] 
  const init = () =>{
    
  }
  const [state, dispatch] = useReducer(reducer,initialState,init)

  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(state))
  }, [state])
  
  const handleform = (todo) =>{
    const action = {
      type:'agregar',
      payload:todo,
    }
    dispatch(action)
  }

  return (
    <>
    <span>Todoapp</span>
    <hr></hr>
    <div className='row'>
      <div className='col-7'>
          <TodoList state={state}/>
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
