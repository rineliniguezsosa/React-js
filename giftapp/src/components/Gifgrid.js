//import { getgift } from "../helpers/Getgifs"
//import React, { useState,useEffect } from 'react';
import { Griditem } from "./Griditem";
import { useFetchgifs } from "../hooks/useFetchgifs";


export function Gifgrid({usercategory}) {

  const {images,cargando} = useFetchgifs()
  // const [images, setImages] = useState([])
  // const getImages = async(usercategory) => {
  //   const img = await getgift(usercategory)
  //   setImages(img)
  // }
  // useEffect(() => {
  //   //getgift(usercategory)
  //   getImages(usercategory)
  // }, [usercategory])
  
  return (
    <>
        <h1>{usercategory}</h1>
        {/* <span>Hola mundo</span> */}
        <div className="card-grid">
          {images.map(({id,titulo,url}) => (
              <Griditem key={id} titulo={titulo} url={url}></Griditem>
          ))
          }
        </div>
    </>
  )
}
