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
    addnewemptynote: (state,action) => {
      state.notas.push(action.payload)
    },
    setactivenote:(state,action) =>{
        
    },
    setnotes:(state,action)=>{

    },
    setsaving:(state)=>{

    },
    updatenote:(state,action)=>{

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
  deletenotebyid 
} = journalSlice.actions