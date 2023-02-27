import { getHeroByPublisher } from "../helpers"


export const HeroList = ({publisher}) => {
    const data = getHeroByPublisher(publisher)
    console.log(data)
  return (
    <div>HeroList</div>
  )
}
