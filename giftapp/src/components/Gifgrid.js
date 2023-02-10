import { getgift } from "../helpers/Getgifs"
import React, { useState,useEffect } from 'react';


export function Gifgrid({usercategory}) {
  const [images, setImages] = useState([])
  const getImages = async(usercategory) => {
    const img = await getgift(usercategory)
    setImages(img)
  }
  useEffect(() => {
    //getgift(usercategory)
    getImages(usercategory)
  }, [usercategory])
  
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
