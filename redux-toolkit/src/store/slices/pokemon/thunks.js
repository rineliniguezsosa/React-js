import { cargandopokemon,añadepokemones } from './PokemonSlice'

export const getpokemon = (page = 0) =>{
    return async(dispatch,getState)=>{
        dispatch(cargandopokemon())
    }
}

/*
    el thunk  es una funcion que retorna una funcion asincrona
    que cada vez que se resuelva se van a disparar las diferentes acciones
*/