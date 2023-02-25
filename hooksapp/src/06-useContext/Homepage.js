import { useContext } from 'react'
import { UserContext } from './Context/UserContext'


export const Homepage = () => {
  const { user,nombre } = useContext(UserContext)
  return (
    <>
    <h1>Homepage: {user?.nombre}</h1>
    <pre>
      {JSON.stringify(nombre)}
    </pre>
    </>
  )
}
