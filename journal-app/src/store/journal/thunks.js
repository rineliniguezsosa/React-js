import { addDoc,collection } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addnewemptynote } from './journalSlice';



export const startnewnote = () =>{
    return async(dispatch,getState)=>{
        const { uid } = getState().auth;

        const newnote = {
            title:'',
            body:'',
            date:new Date().getTime()
        }
        //agregamos el registro a la colección
        const doc = await addDoc(collection( FirebaseDB, `${ uid }`, "journal/notas"),{
            ...newnote
        });
       
        newnote.id = doc.id;

        console.log(doc)
    }
}