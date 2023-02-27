import { Routes,Route,Navigate } from "react-router-dom"
import { Loginpage } from "../auth/pages/Loginpage"
import { DCpages,Marvelpages } from "../heroes"
import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="marvel" element={<Marvelpages></Marvelpages>}></Route>
        <Route path="dc" element={<DCpages></DCpages>}></Route>
        <Route path="login" element={<Loginpage></Loginpage>}></Route>
        <Route path="/" element={<Navigate to="marvel"></Navigate>}></Route>
    </Routes>
    </>
  )
}
