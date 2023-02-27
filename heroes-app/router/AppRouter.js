import { Routes,Route } from "react-router-dom"
import { Loginpage } from "../auth/pages/Loginpage"
import { DCpages } from "../heroes/pages/DCpages"
import { Marvelpages } from "../heroes/pages/Marvelpages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="marvel" element={<Marvelpages></Marvelpages>}></Route>
        <Route path="dc" element={<DCpages></DCpages>}></Route>
    </Routes>
  )
}
