import { useParams,Navigate } from "react-router-dom"
import { getHeroById } from "../helpers"


export const Hero = () => {
  const { heroid } = useParams()
  return (
    <div>Hero</div>
  )
}
