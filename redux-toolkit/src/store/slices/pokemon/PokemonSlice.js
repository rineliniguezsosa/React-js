import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    pagina:0,
    pokemones:[],
    cargando:false
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrementby:(state,action) =>{
        state.counter+=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrementby } = pokemonSlice.actions