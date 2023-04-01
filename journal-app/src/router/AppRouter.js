import { Routes,Route,Navigate } from 'react-router-dom'
import { Authroutes } from '../auth/routes/Authroutes'
import { Journalroutes } from '../journal/routes/Journalroutes'
import { CheckingAuth } from '../ui'



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
