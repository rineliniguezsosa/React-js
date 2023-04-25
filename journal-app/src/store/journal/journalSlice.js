import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
  name: 'journal',
  initialState:{
    issaving:false, //variable para saber si almacene o no un objeto
    messagesaved:'', //mensage de almacenamiento
    notas:[], //aqui se almacenan los notas
    activo:null //nota activa
  },
  reducers: {
    savingnewnote: (state) =>{
      state.issaving = true;
    },
    addnewemptynote: (state,action) => {
      state.notas.push(action.payload)
      state.issaving = false;
    },
    setactivenote:(state,action) =>{
      state.activo = action.payload;
    },
    setnotes:(state,action)=>{
      state.notas = action.payload;
    },
    setsaving:(state)=>{
      state.issaving = true
    },
    updatenote:(state,action)=>{
      state.issaving = false;
    },
    deletenotebyid:(state,action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  addnewemptynote,
  setactivenote,
  setnotes,
  setsaving,
  updatenote,
  deletenotebyid,
  savingnewnote 
} = journalSlice.actions