//Proveedores de autenticacion
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const provider = new GoogleAuthProvider();

export const Signinwithgoogle = async() =>{
    try {
        provider.setCustomParameters({prompt: 'select_account'}) //1)
        const result = await signInWithPopup(FirebaseAuth,provider)
        const {displayName,email,photoURL,uid} = result.user
        return {
            okay:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        
        const errorMessage = error.message;

        return {
            okay:false,
            errorMessage
        }
        
        
    }
}

const createuserwithdisplayNamemailpassword = async() =>{
    try {
        
    } catch (error) {
        
    }
}
/* comentarios de linea
1)
establecemos provider.setCustomParameters para pasar una solicitud de googleAuth para operaciones de inicio de sesion emergentes y redireccionamiento

parametro: prompt
valor:'select_account'
descripcion:
El servidor de autorización le solicita al usuario que seleccione una cuenta de usuario. Esto permite que un usuario que tiene varias cuentas en el servidor de autorización seleccione entre las múltiples cuentas para las que puede tener sesiones actuales.
*/