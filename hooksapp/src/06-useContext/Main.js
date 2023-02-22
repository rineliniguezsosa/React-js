import { Routes,Route,Navigate,Link } from 'react-router-dom'
import { Homepage } from '../06-useContext/Homepage'
import { Aboutpage } from '../06-useContext/Aboutpage'
import { Loginpage } from '../06-useContext/Loginpage'
import { Navbar } from '../components/Navbar'


export const Main = () => {
  return (
    <>
    <h1>Main</h1>
      <hr></hr>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
      <Route path="/login" element={<Loginpage></Loginpage>}></Route>
       {/* ruta que no existe */}
      <Route path="/*" element={<Navigate to="/about"></Navigate>}></Route>
    </Routes>
    </>
  )
}
