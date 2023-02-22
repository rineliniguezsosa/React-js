import { Routes,Route } from 'react-router-dom'
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
    </Routes>
    </>
  )
}
