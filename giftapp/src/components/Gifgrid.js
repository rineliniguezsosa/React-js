import { getgift } from "../helpers/Getgifs"
import React, { useEffect } from 'react';


export function Gifgrid({usercategory}) {
  
  getgift(usercategory)
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
