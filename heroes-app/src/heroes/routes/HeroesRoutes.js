import { Navbar } from "../../ui"
import {Routes,Route,Navigate} from 'react-router-dom'
import { Marvelpages,DCpages,Search,Hero } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar></Navbar>
        
        <div className="container">
            <Routes>
                <Route path="marvel" element={<Marvelpages></Marvelpages>}></Route>
                <Route path="dc" element={<DCpages></DCpages>}></Route>
                <Route path="search" element={<Search></Search>}></Route>
                <Route path="hero" element={<Hero></Hero>}></Route>
                <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
            </Routes>
        </div>
    </>
  )
}
