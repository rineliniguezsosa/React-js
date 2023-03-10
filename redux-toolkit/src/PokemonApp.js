import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    
  },[])
  
  return (
    <>
        <h1>Pokemon</h1>
        <hr></hr>
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}
