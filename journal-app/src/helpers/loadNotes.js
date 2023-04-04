import { collection } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadnotes = async(uid = '') =>{
    if(!uid){
        throw new Error('El uid del usuario no existe')
    }
    //referencia para obtener los documentos o registros
    const ref = collection(FirebaseDB, `${ uid }/journal/notas`)
}