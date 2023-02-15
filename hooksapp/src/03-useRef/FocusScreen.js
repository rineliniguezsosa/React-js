
export function FocusScreen() {
  return (
    <>
    <h1>FocusScreen</h1>
    <hr></hr>
    <input
    type="text"
    placeholder="Ingrese el valor"
    className="form-control"
    />

    <button onClick={()=> Enfocar()} className="btn btn-primary mt-2">Enfocar</button>
    </>
  )
}
