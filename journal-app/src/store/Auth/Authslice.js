import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status:'sinautenticar', //estado de la autenticacion
    uid:null, //id user
    email:null, //email user
    photoUrl:null,
    mensajeserror:null
  },
  reducers: {
    login: (state,action) => {
      
    },
    logout:(state,payload) =>{
        
    },
    verificandocredenciales:(state,action)=>{
        state.status = 'verificando'
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,logout,verificandocredenciales } = authSlice.actions