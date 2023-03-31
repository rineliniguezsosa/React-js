import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status:'verificando', //estado de la autenticacion
    uid:null, //id user
    email:null, //email user
    displayname:null,
    photoUrl:null,
    mensajeserror:null
  },
  reducers: {
    login: (state,{payload}) => {
      state.status ='autenticado'; //estado de la autenticacion
      state.uid = payload.uid; //id user
      state.email = payload.email; //email user
      state.displayname = payload.displayName;
      state.photoUrl = payload.photoURL;
      state.mensajeserror = null;
    },
    logout:(state,{payload}) =>{
      state.status ='sinautenticar'; //estado de la autenticacion
      state.uid = null; //id user
      state.email = null; //email user
      state.displayname = null;
      state.photoUrl = null;
      state.mensajeserror = payload;
    },
    verificandocredenciales:(state,action)=>{
        state.status = 'verificando'
    
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,logout,verificandocredenciales } = authSlice.actions