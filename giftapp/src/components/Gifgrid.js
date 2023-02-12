//import { getgift } from "../helpers/Getgifs"
//import React, { useState,useEffect } from 'react';
import { Griditem } from "./Griditem";
import { useFetchgifs } from "../hooks/useFetchgifs";
import PropTypes from 'prop-types'


export function Gifgrid({usercategory}) {

  const {images,cargando} = useFetchgifs(usercategory)
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
        {
          cargando ? <p>Cargando ...</p> : ''
        }
        <div className="card-grid">
          {images.map(({id,titulo,url}) => (
              <Griditem key={id} titulo={titulo} url={url}></Griditem>
          ))
          }
        </div>
    </>
  )
}

Gifgrid.propTypes = {
  usercategory:PropTypes.string.isRequired,
}