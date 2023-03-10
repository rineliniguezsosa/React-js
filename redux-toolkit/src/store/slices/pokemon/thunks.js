import { pokemonApi } from '../../../Api/pokemonApi'
import { cargandopokemon,añadepokemones } from './PokemonSlice'

export const getpokemon = (page = 0) =>{
    return async(dispatch,getState)=>{
        dispatch(cargandopokemon())

        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page+1}`)

        console.log(data.results)

        dispatch(añadepokemones({pagina:page+1,pokemones:data.results}))
    }
}

/*
    el thunk  es una funcion que retorna una funcion asincrona
    que cada vez que se resuelva se van a disparar las diferentes acciones
*/