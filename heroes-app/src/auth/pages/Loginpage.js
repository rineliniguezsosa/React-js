import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'


export const Loginpage = () => {
  const navigate = useNavigate()
  const {Login} = useContext(AuthContext)
  
  const onLogin = () =>{

    Login('rinel iñiguez')

    navigate('/',{
      replace:true
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
