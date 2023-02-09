import { useState } from "react"



export function Addcategoria({onNewCategorias}) {
  const [inputvalue, setInputvalue] = useState('')

  const inputchange = (event) =>{
    setInputvalue(event.target.value)
  }
  
  const submitform = (event) =>{
    event.preventDefault()
    //setCategorias((categorias)=> [inputvalue,...categorias])
    onNewCategorias(inputvalue.trim())
    setInputvalue('')
  }
   return (
    <form onSubmit={(event) => submitform(event)}>
        <input type="text" placeholder="Buscar" value={inputvalue} onChange={(event)=>inputchange(event)}></input>
    </form>
  )
}
