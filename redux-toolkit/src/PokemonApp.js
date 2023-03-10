import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getpokemon } from './store/slices/pokemon';


export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getpokemon())
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
