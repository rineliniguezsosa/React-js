import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    pagina:0,
    pokemones:[],
    cargando:false
  },
  reducers: {
    cargandopokemon: (state) => { 
      state.cargando = true
    },
    añadepokemones:(state,action) =>{ //cuando ya tenemos pokemones
        state.pagina = action.payload.pagina
        state.cargando = false
        state.pokemones = action.payload.pokemones
    }
  },
})

// Action creators are generated for each case reducer function
export const { cargandopokemon,añadepokemones } = pokemonSlice.actions