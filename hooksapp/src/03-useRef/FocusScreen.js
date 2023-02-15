import { useRef } from 'react'

export function FocusScreen() {
   const inputRef = useRef()
   const Enfocar = () =>{
        inputRef.current.focus()
   }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr></hr>
    <input
    type="text"
    placeholder="Ingrese el valor"
    className="form-control"
    ref={inputRef}
    />

    <button onClick={()=> Enfocar()} className="btn btn-primary mt-2">Enfocar</button>
    </>
  )
}
