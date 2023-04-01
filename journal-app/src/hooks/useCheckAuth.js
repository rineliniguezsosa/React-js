import { useSelector,useDispatch } from "react-redux"
import { useEffect } from 'react'
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { logout,login } from '../store/Auth'

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    onAuthStateChanged(FirebaseAuth,async(user)=>{
      if(!user){ return dispatch(logout())}

      const {uid,email,displayName,photoURL} = user

      dispatch(login({uid,email,displayName,photoURL}))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return {
    status
  }
}
