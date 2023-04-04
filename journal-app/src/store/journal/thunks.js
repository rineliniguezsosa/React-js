import { addDoc,collection } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addnewemptynote,setactivenote,savingnewnote } from './journalSlice';



export const startnewnote = () =>{
    return async(dispatch,getState)=>{
        const { uid } = getState().auth;
        dispatch(savingnewnote())
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

        dispatch(addnewemptynote(newnote))
        dispatch(setactivenote(newnote))
    }
}

export const startloadingnotes = () =>{
    return async(dispatch) =>{

    }
}