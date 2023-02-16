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
    <ul>
        <li></li>
    </ul>
    </>
  )
}
