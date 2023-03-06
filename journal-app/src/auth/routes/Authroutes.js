import { Routes,Route,Navigate } from 'react-router-dom'
import { Loginpage,Registropage } from '../pages'

export const Authroutes = () => {
  return (
    <Routes>
        <Route path="login" element={<Loginpage></Loginpage>}></Route>

        <Route path="registro" element={<Registropage></Registropage>}></Route>
    </Routes>
  )
}
