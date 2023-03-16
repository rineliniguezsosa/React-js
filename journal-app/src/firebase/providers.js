//Proveedores de autenticacion
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const provider = new GoogleAuthProvider();

export const Signinwithgoogle = async() =>{
    try {
        const result = await signInWithPopup(FirebaseAuth,provider)
       // const credenciales = GoogleAuthProvider.credentialFromResult(result)
       const {displayName,email,photoURL,uid} = result.user
        console.log(displayName,email,photoURL,uid)
        return {
            okay:true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        
         console.log(error)
        
    }
}