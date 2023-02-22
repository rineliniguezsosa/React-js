import { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const Loginpage = () => {
  const { usuario } = useContext(UserContext)
  console.log(usuario)
  return (
    <>
    <h1>Loginpage</h1>
    <hr></hr>
    {JSON.stringify(usuario)}

    <button className="btn btn-primary">Agregar</button>
    </>
  )
}
