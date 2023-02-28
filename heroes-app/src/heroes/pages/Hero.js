import { useParams,Navigate } from "react-router-dom"
import { getHeroById } from "../helpers"


export const Hero = () => {
  const { heroid } = useParams()

  const heroe = getHeroById(heroid)

  if(!heroe){
    return <Navigate to="/marvel"/>
  }
  return (
    <div>Hero</div>
  )
}
