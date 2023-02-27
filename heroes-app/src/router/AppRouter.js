import { Routes,Route,Navigate } from "react-router-dom"
import { Loginpage } from "../auth/pages/Loginpage"
import { DCpages } from "../heroes/pages/DCpages"
import { Marvelpages } from "../heroes/pages/Marvelpages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="marvel" element={<Marvelpages></Marvelpages>}></Route>
        <Route path="dc" element={<DCpages></DCpages>}></Route>
        <Route path="login" element={<Loginpage></Loginpage>}></Route>
        <Route path="/" element={<Navigate to="marvel"></Navigate>}></Route>
    </Routes>
  )
}
