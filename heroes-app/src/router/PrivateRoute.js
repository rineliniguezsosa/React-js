import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"


export const PrivateRoute = ({children}) => {
  const {logged} = useContext(AuthContext)
  //console.log(logged)
  return (logged) ? children : <Navigate to="/login"></Navigate>
}
