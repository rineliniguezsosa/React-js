import { useState } from "react"



export function Addcategoria() {
  const [inputvalue, setInputvalue] = useState('Gon')

  const inputchange = () =>{
    
  }
  return (
    <input type="text" placeholder="Buscar" value={inputvalue} onChange={inputchange}>Addcategoria</input>
  )
}
