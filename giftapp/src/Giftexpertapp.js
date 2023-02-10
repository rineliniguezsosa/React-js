import React, { useState } from 'react';
import { Addcategoria } from './components/Addcategoria';
import { Gifgrid } from './components/Gifgrid';

export function Giftexpertapp() {
  const [categorias, setCategorias] = useState(['Gon'])

  const addcategory = (value) =>{
    const cleanCategory = value.toLowerCase();
    if(categorias.includes(cleanCategory)) return;//validando que las key sean unicas
    setCategorias([value,...categorias])
  }
  return (
    <>
        <h1>Giftexpertapp</h1>
        <Addcategoria onNewCategorias={(value)=> addcategory(value)}/>
        <button onClick={addcategory}>Agregar una categoria</button>
        {/* LISTAMOS LOS GIFS */}
        <ol>
            {categorias.map(usercategory => (
                <li key={usercategory}>{usercategory}</li>
            ))}
        </ol>
    </>
  )
}
