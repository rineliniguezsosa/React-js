import { useReducer } from 'react';

export function Todoapp() {
  const [state, dispatch] = useReducer(first, second, third)
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
