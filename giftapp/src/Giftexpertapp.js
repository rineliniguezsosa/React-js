import React, { useState } from 'react';

export function Giftexpertapp() {
  const [categorias, setCategorias] = useState(['Gon'])
  return (
    <>
        <h1>Giftexpertapp</h1>
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
