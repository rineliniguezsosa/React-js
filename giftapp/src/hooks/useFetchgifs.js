import { useState,useEffect } from 'react';
import { getgift } from '../helpers/Getgifs';

export function useFetchgifs(usercategory) {
  
  const [images, setImages] = useState([])
  const [cargando, setCargando] = useState(true)

  const getImages = async(usercategory) => {
    const img = await getgift(usercategory)
    setImages(img)
    setCargando(false)
  }

  useEffect(() => {
    //getgift(usercategory)
    getImages(usercategory)
  }, [usercategory])

  return {
    images,
    cargando
  }
}
