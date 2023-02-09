import React, { useState } from 'react';
import { Addcategoria } from './components/Addcategoria';

export function Giftexpertapp() {
  const [categorias, setCategorias] = useState(['Gon'])

  const addcategory = () =>{
    setCategorias([...categorias,'one punch man'])
  }
  return (
    <>
        <h1>Giftexpertapp</h1>
        <Addcategoria/>
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
