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
    addnewemptynote: (state,payload) => {
      
    },
    setactivenote:(state,payload) =>{
        
    },
    setnotes:(state,payload)=>{

    },
    setsaving:(state)=>{

    },
    updatenote:(state,payload)=>{

    },
    deletenotebyid:(state,payload)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrementby } = journalSlice.actions