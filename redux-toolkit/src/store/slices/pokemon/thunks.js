import { pokemonApi } from '../../../Api/pokemonApi'
import { cargandopokemon,añadepokemones } from './PokemonSlice'

export const getpokemon = (page = 0) =>{
    return async(dispatch,getState)=>{
        dispatch(cargandopokemon())

        const req = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page +1}`)
        const data = await req.json()

        console.log(data)

        dispatch(añadepokemones({pagina:page+1,pokemones:data.results}))
    }
}

/*
    el thunk  es una funcion que retorna una funcion asincrona
    que cada vez que se resuelva se van a disparar las diferentes acciones
*/