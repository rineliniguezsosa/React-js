import { useMemo } from "react"
import { useParams,Navigate,useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {
  const { heroid } = useParams()
  const navigate = useNavigate()

  const heroe = getHeroById(heroid)

  if(!heroe){
    return <Navigate to="/marvel"/>
  }

  const regresar = () =>{
    navigate(-1)
  }
  return (
    <div className="row mt-5">
        <div className="col-4">
          <img className="img-thumbnail" src={`../../assets/heroes/${heroid}.jpg`} alt={heroe.superhero} />
        </div>

        <div className="col-8">
          <h3>{heroe.superhero}</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">alter ego:{heroe.alter_ego}</li>
              <li className="list-group-item">publisher:{heroe.publisher}</li>
              <li className="list-group-item">Appearance:{heroe.first_appearance}</li>
          </ul>

          <h5 className="mt-3">caracteres</h5>
          <p>{heroe.characters}</p>

          <button onClick={regresar} className="btn btn-outline-primary">
            regresar
          </button>
        </div>
    </div>
  )
}
