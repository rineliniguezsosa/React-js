import { useEffect,useState } from 'react';

export const useFetch = (url) => {
 const [datos, setDatos] = useState({
    data:null,
    cargando:true,
    errores:null
 })
 const getBreakinbadapi = async (url) =>{
    const req = await fetch(url)
    const data = await req.json()
    setDatos({
        data,
        cargando:false,
        errores:null
    })
 }

  useEffect(() => {
    getBreakinbadapi(url)
  }, [url])
  
  return {}
}
