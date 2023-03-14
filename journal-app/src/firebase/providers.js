//Proveedores de autenticacion
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const provider = new GoogleAuthProvider();

export const Signinwithgoogle = async() =>{
    try {
        const result = signInWithPopup(FirebaseAuth,provider)
        const credenciales = GoogleAuthProvider.credentialFromResult(result)
    } catch (error) {
        
    }
}