import { doc,collection} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';


export const startnewnote = () =>{
    return async(dispatch,getState)=>{
        const { uid } = getState().auth;

        //tomamos el path ó ruta hacia el cloud de firestore mediante el doc
        const newdoc = doc(collection(FirebaseDB,`/${uid}/journal/notas`))
    }
}