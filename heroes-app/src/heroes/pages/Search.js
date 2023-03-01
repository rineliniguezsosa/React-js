

export const Search = () => {
  return (
    <>
    <span>Search</span>
    <hr></hr>
    <div className="row">
    <div className="col-5">
      <h4>Busqueda.</h4>
      <hr></hr>
      <form>
        <input 
        type="text" 
        placeholder="busqueda" 
        name="search"
        autoComplete="off"
        className="form-control"
        >
        </input>

        <button className="btn btn-outline-primary">Enviar</button>
      </form>
    </div>

    <div className="col-7">
      <h4>Resultados..</h4>
      <hr></hr>
      <div className="alert alert-primary">
          Busca un heroe
      </div>

      <div className="alert alert-danger">
          no hay resultados :/
      </div>
    </div>
    </div>
    </>
  )
}
