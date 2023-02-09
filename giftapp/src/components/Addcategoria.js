import { useState } from "react"



export function Addcategoria() {
  const [inputvalue, setInputvalue] = useState('Gon')

  const inputchange = (event) =>{
    setInputvalue(event.target.value)
  }
  return (
    <form>
        <input type="text" placeholder="Buscar" value={inputvalue} onChange={(event)=>inputchange(event)}></input>
    </form>
  )
}
