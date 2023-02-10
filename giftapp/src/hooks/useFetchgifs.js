import React, { useState,useEffect } from 'react';
import { getgift } from '../helpers/Getgifs';

export function useFetchgifs(usercategory) {
  
  const [images, setImages] = useState([])
  const getImages = async(usercategory) => {
    const img = await getgift(usercategory)
    setImages(img)
  }
  useEffect(() => {
    //getgift(usercategory)
    getImages(usercategory)
  }, [usercategory])
}
