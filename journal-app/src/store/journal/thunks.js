import { doc,collection} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';


export const startnewnote = () =>{
    return async(dispatch,getState)=>{
        const { uid } = getState().auth;
    }
}