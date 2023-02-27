import { Navbar } from "../../ui"
import {Routes,Route} from 'react-router-dom'
import { Marvelpages } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar></Navbar>

        <Routes>
            <Route path="marvel" element={<Marvelpages></Marvelpages>}></Route>
        </Routes>
    </>
  )
}
