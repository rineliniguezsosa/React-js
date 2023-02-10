import { getgift } from "../helpers/Getgifs"


export function Gifgrid({usercategory}) {
  
  getgift(usercategory)
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
