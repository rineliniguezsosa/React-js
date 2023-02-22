import { Routes,Route,Navigate } from 'react-router-dom'
import { Homepage } from '../06-useContext/Homepage'
import { Aboutpage } from '../06-useContext/Aboutpage'
import { Loginpage } from '../06-useContext/Loginpage'


export const Main = () => {
  return (
    <>
    <h1>Main</h1>
      <hr></hr>
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
