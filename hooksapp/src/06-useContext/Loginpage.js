import { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const Loginpage = () => {
  const { usuario } = useContext(UserContext)
  console.log(usuario)
  return (
    <div>Loginpage</div>
  )
}
