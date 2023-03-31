import { Routes,Route } from 'react-router-dom'
import { Authroutes } from '../auth/routes/Authroutes'
import { Journalroutes } from '../journal/routes/Journalroutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui'
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    onAuthStateChanged(FirebaseAuth,async(user)=>{
      console.log(user)
    })
  },[])
  
  if(status === 'verificando'){
    return (
      <CheckingAuth/>
    )
  }  
  return (
    <Routes>
        <Route path="/auth/*" element={<Authroutes></Authroutes>}></Route>

         <Route path="/*" element={<Journalroutes></Journalroutes>}></Route>
    </Routes>
  )
}
