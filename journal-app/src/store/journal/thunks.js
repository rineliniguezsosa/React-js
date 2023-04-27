import { addDoc,collection,doc,setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addnewemptynote,setactivenote,savingnewnote,setnotes,updatenote,setsaving,setphotostoactivenote } from './journalSlice';
import { fileupload, loadnotes } from '../../helpers';

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
    return async(dispatch,getState) =>{
        const { uid }= getState().auth;

       const notas = await loadnotes(uid)

       dispatch(setnotes(notas))
    }
}

export const startsavingupdatenote = () =>{
    return async(dispatch,getState) =>{
        const { uid }= getState().auth;
        const { activo:nota }= getState().journal;

        const notatofirestore  = {...nota}
        delete notatofirestore.id;
        
        const ref =  doc(FirebaseDB,`${ uid }/journal/notas/${nota.id}`)
        await setDoc(ref,notatofirestore,{ merge: true });

        dispatch(updatenote(nota))
    }
}

export const startuploadingfiles = (files = []) =>{
    return async(dispatch) =>{
        dispatch(setsaving())

        //await fileupload(files)
        const fileuploadpromises = []
        for (const file of files) {
            fileuploadpromises.push(fileupload(file))
        }

        const photourl = await Promise.all(fileuploadpromises)

        dispatch(setphotostoactivenote(photourl))
    }
}