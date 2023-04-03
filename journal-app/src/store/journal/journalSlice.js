import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
  name: 'journal',
  initialState:{
    issaving:true, //variable para saber si almacene o no un objeto
    messagesaved:'', //mensage de almacenamiento
    notas:[], //aqui se almacenan los notas
    activo:null //nota activa
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
export const { increment,decrementby } = journalSlice.actions