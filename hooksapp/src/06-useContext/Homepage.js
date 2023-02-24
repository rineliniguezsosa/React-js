import { useContext } from 'react'
import { UserContext } from './Context/UserContext'


export const Homepage = () => {
  const { user } = useContext(UserContext)
  return (
    <div>Homepage</div>
  )
}
