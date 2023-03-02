import { Routes,Route } from "react-router-dom"
import { Loginpage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={
        <PublicRoute>
          <Loginpage></Loginpage>
        </PublicRoute>
        }>
        </Route>
    
        <Route path="/*" element={
        <PrivateRoute>
          <HeroesRoutes></HeroesRoutes>
        </PrivateRoute>
        }>
        </Route>
    </Routes>
    </>
  )
}
