import { Signinwithgoogle,createuserwithdisplayNamemailpassword } from "../../firebase/providers"
import { verificandocredenciales,logout,login } from "./Authslice"

export const verificandoAutenticacion = (email,password) =>{
    return async(dispatch) =>{
        dispatch(verificandocredenciales())
    }
}

export const startgooglesignin = () =>{
    return async(dispatch)=>{
        dispatch(verificandocredenciales())

        const result = await Signinwithgoogle();
        if(!result.okay){ return dispatch(logout(result.errorMessage))}

        dispatch(login(result))
    }
}

export const startcreatinguserwithpasswordemail = ({displayName,email,contrasena}) =>{
    return async(dispatch) =>{
        dispatch(verificandocredenciales())

        const {ok,photoURL,uid,errorMessage} = await createuserwithdisplayNamemailpassword({displayName,email,contrasena})

        if(!ok){ return dispatch(logout(errorMessage))}

        dispatch(login(displayName,email,contrasena,photoURL,uid))
        
    }
}