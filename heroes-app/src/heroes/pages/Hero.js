import { useParams,Navigate } from "react-router-dom"
import { getHeroById } from "../helpers"


export const Hero = () => {
  const { heroid } = useParams()

  const heroe = getHeroById(heroid)

  if(!heroe){
    return <Navigate to="/marvel"/>
  }
  return (
    <div className="row mt-5">
        <div className="col-4">
          <img className="img-thumbnail" src={`../../assets/heroes/${heroid}.jpg`} alt={heroe.superhero} />
        </div>

        <div className="col-8">
          <h3>{heroe.superhero}</h3>
        </div>
    </div>
  )
}
