import { getHeroByPublisher } from "../helpers"


export const HeroList = ({publisher}) => {
    const data = getHeroByPublisher(publisher)
    console.log(data)
  return (
    <>
        <ul>
            {
            data.map(datos =>(
                <li key={datos.id}>{datos.superhero}</li>
            ))
            }
        </ul>
    </>
  )
}
