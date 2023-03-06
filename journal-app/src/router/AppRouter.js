import { Routes,Route } from 'react-router-dom'
import { Authroutes } from '../auth/routes/Authroutes'
import { Journalroutes } from '../journal/routes/Journalroutes'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<Authroutes></Authroutes>}></Route>

         <Route path="/*" element={<Journalroutes></Journalroutes>}></Route>
    </Routes>
  )
}
