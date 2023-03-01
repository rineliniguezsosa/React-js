import { useNavigate,useLocation } from "react-router-dom"
import queryString from 'query-string';
import { useForm } from "../hooks/useForm"

export const Search = () => {
  const {search,onInputChange} = useForm({search:''})
  const navigate = useNavigate()
  const location = useLocation() //useLocation simplemente nos devolvera informacion de la ubicación actual
  
  const {q = ''} = queryString.parse(location.search)

  const Sendform = (event)=>{
    event.preventDefault()
    if(search.trim().length <= 1) return;
   
    navigate(`?q=${search}`) //query param
  }
  return (
    <>
    <span>Search</span>
    <hr></hr>
    <div className="row">
    <div className="col-5">
      <h4>Busqueda.</h4>
      <hr></hr>
      <form onSubmit={Sendform}>
        <input 
        type="text" 
        placeholder="busqueda" 
        name="search"
        autoComplete="off"
        className="form-control"
        onChange={onInputChange}
        value={search}
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
