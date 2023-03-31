import { Routes,Route } from 'react-router-dom'
import { Authroutes } from '../auth/routes/Authroutes'
import { Journalroutes } from '../journal/routes/Journalroutes'
import { useSelector,useDispatch } from 'react-redux'
import { CheckingAuth } from '../ui'
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { logout,login } from '../store/Auth'


export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    onAuthStateChanged(FirebaseAuth,async(user)=>{
      if(!user){ return dispatch(logout())}

      const {uid,email,displayName,photoURL} = user

      dispatch(login({uid,email,displayName,photoURL}))
    })
  },[])

  if(status === 'verificando'){
    return (
      <CheckingAuth/>
    )
  }  
  return (
    <Routes>
      {
        (status === 'autenticado')
        ?
          <Route path="/auth/*" element={<Authroutes></Authroutes>}></Route>
          :
         <Route path="/*" element={<Journalroutes></Journalroutes>}></Route>
      }
    </Routes>
  )
}
