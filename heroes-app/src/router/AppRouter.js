import { Routes,Route } from "react-router-dom"
import { Loginpage } from "../auth"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="login" element={<Loginpage></Loginpage>}></Route>
    
        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
    </Routes>
    </>
  )
}
