import { doc,collection} from 'firebase/firestore/lite'


export const startnewnote = () =>{
    return async(dispatch,getState)=>{
        const { uid } = getState().auth;
    }
}