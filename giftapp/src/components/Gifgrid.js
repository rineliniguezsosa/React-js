import { getgift } from "../helpers/Getgifs"
import React, { useState,useEffect } from 'react';


export function Gifgrid({usercategory}) {
  const getImages = async() => {
    const img = await getgift()
  }
  useEffect(() => {
    //getgift(usercategory)
    getImages()
  }, [])
  
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
