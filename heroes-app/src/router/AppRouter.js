import { Routes,Route } from "react-router-dom"
import { Loginpage } from "../auth"
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={<Loginpage></Loginpage>}></Route>
    
        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
    </Routes>
    </>
  )
}
