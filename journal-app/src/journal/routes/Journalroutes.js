import { Routes,Route,Navigate } from 'react-router-dom'
import { Journalpage } from '../pages/Journalpage'

export const Journalroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Journalpage></Journalpage>}></Route>

        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  )
}
