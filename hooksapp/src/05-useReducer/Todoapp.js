import { useReducer } from 'react';

export function Todoapp() {
  const [state, dispatch] = useReducer(reducer, second, third)
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
