import { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const Loginpage = () => {
  const { user,setUser } = useContext(UserContext)
  console.log(user)
  return (
    <>
    <h1>Loginpage</h1>
    <hr></hr>
    {JSON.stringify(user)}

    <button onClick={()=> setUser([...user,{id:124,
        nombre:"juan pablo"}])} className="btn btn-primary">Agregar</button>
    </>
  )
}
