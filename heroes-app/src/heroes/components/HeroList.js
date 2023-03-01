import { useMemo } from "react"
import { getHeroByPublisher } from "../helpers"
import { Herocard } from "./Herocard"

export const HeroList = ({publisher}) => {
    const data = useMemo(()=> getHeroByPublisher(publisher),[publisher])
    console.log(data)
  return (
    <>
        <div className="row rows-cols-1 rows-cols-md-3 g-3">
            {
            data.map(datos =>(
                <Herocard key={datos.id} {...datos}></Herocard>
            ))
            }
        </div>
    </>
  )
}
