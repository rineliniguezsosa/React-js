import { Signinwithgoogle,createuserwithdisplayNamemailpassword,loginwithemailpassword,LogoutFirebase } from "../../firebase/providers"
import { clearnotaslogout } from "../journal"
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

        const {okay,photoURL,uid,errorMessage} = await createuserwithdisplayNamemailpassword({displayName,email,contrasena})

        if(!okay){ return dispatch(logout(errorMessage))}

        dispatch(login({displayName,email,contrasena,photoURL,uid}))
        
    }
}

export const startloginwithemailandpassword = ({email,contrasena}) =>{
    return async(dispatch) =>{
        dispatch(verificandocredenciales())

        const resp = await loginwithemailpassword({email,contrasena})
        
        if(!resp.okay){ return dispatch(logout(resp.errorMessage))}

        dispatch(login(resp))
    }
}

export const startlogoutfirebase = () =>{
    return async(dispatch)=>{
        await LogoutFirebase()

        dispatch(logout())
    }
}