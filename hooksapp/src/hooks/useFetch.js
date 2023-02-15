import { useEffect,useState } from 'react';

export const useFetch = (url) => {

 const getBreakinbadapi = async (url) =>{
    const req = await fetch(url)
    const data = await req.json()
    console.log(data)
 }

  useEffect(() => {
    getBreakinbadapi(url)
  }, [url])
  
  return {}
}
