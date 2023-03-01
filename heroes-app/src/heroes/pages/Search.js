

export const Search = () => {
  return (
    <>
    <span>Search</span>
    <hr></hr>
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
      </form>
    </div>

    <div className="col-7">

    </div>
    </>
  )
}
