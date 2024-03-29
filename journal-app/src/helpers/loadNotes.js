import { collection,getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadnotes = async(uid = '') =>{
    if(!uid){
        throw new Error('El uid del usuario no existe')
    }
    //referencia para obtener los documentos o registros
    const ref = collection(FirebaseDB, `${ uid }/journal/notas`)
    const resp = await getDocs(ref)
    const notas = [];
    resp.forEach(info =>{
        notas.push({
            id:info.id,
            body:info.data().body,
            title:info.data().title,
            date:info.data().date,
            imageurls:info.data().imageurls || []
        })
    })

    return notas;
}