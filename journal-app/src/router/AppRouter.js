import { Routes,Route,Navigate } from 'react-router-dom'
import { Authroutes } from '../auth/routes/Authroutes'
import { Journalroutes } from '../journal/routes/Journalroutes'
import { useSelector,useDispatch } from 'react-redux'
import { CheckingAuth } from '../ui'
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { logout,login } from '../store/Auth'


export const AppRouter = () => {
  

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
         <Route path="/*" element={<Journalroutes></Journalroutes>}></Route>
          :
         <Route path="/auth/*" element={<Authroutes></Authroutes>}></Route>
      }
       <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>
    </Routes>
  )
}
