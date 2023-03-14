import { verificandocredenciales } from "./Authslice"

export const verificandoAutenticacion = (email,password) =>{
    return async(dispatch) =>{
        dispatch(verificandocredenciales(email,password))
    }
}

export const startgooglesignin = () =>{
    return async(dispatch)=>{

    }
}