import { Routes,Route } from 'react-router-dom'
import { Homepage } from '../06-useContext/Homepage'
import { Aboutpage } from '../06-useContext/Aboutpage'


export const Main = () => {
  return (
    <>
    <h1>Main</h1>
      <hr></hr>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
    </Routes>
    </>
  )
}
