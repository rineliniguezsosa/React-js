import { useState } from "react"



export function Addcategoria({setCategorias}) {
  const [inputvalue, setInputvalue] = useState('Gon')

  const inputchange = (event) =>{
    setInputvalue(event.target.value)
  }
  
  const submitform = (event) =>{
    event.preventDefault()
    setCategorias((categorias)=> [inputvalue,...categorias])
    setInputvalue('')
  }
   return (
    <form onSubmit={(event) => submitform(event)}>
        <input type="text" placeholder="Buscar" value={inputvalue} onChange={(event)=>inputchange(event)}></input>
    </form>
  )
}
