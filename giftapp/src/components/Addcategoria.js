import { useState } from "react"



export function Addcategoria() {
  const [inputvalue, setInputvalue] = useState('Gon')
  return (
    <input type="text" placeholder="Buscar" value={inputvalue}>Addcategoria</input>
  )
}
