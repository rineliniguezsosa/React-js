import { useContext } from "react"
import { AuthContext } from "../auth/context"


export const PrivateRoute = () => {
  const {logged} = useContext(AuthContext)
  console.log(logged)
  return (
    <div>PrivateRoute</div>
  )
}
