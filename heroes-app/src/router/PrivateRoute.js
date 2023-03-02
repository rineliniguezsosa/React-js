import { useContext } from "react"
import { Navigate,useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context"


export const PrivateRoute = ({children}) => {
  const {logged} = useContext(AuthContext)
  
  const {pathname,search} = useLocation()
  const ultimapagina = pathname+search
  localStorage.setItem('ultimapagina',ultimapagina)

  return (logged) ? children : <Navigate to="/login"></Navigate>
}
