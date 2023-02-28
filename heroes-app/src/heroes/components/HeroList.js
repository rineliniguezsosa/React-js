import { getHeroByPublisher } from "../helpers"
import { Herocard } from "./Herocard"


export const HeroList = ({publisher}) => {
    const data = getHeroByPublisher(publisher)
    console.log(data)
  return (
    <>
        <div className="row rows-cols-1 rows-cols-md-3 g-3">
            {
            data.map(datos =>(
                <li key={datos.id}>{datos.superhero}</li>
            ))
            }
        </div>
    </>
  )
}
