//Proveedores de autenticacion
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const provider = new GoogleAuthProvider();

export const Signinwithgoogle = async() =>{
    try {
        const result = await signInWithPopup(FirebaseAuth,provider)
        const credenciales = GoogleAuthProvider.credentialFromResult(result)
        console.log({credenciales})
    } catch (error) {
        
         console.log(error)
        
    }
}