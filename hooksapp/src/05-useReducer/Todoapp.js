import { Todoadd } from './Todoadd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';



export function Todoapp() {
  
  const { state,handleform,removeItem,tareacompletada } = useTodo()

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
