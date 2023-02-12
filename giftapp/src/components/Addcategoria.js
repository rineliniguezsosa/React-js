import { useState } from "react"
import PropTypes from 'prop-types'



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
    <form onSubmit={(event) => submitform(event)} aria-label="form">
        <input type="text" placeholder="Buscar" value={inputvalue} onChange={(event)=>inputchange(event)}></input>
    </form>
  )
}

Addcategoria.propTypes = {
  onNewCategorias:PropTypes.func.isRequired
}