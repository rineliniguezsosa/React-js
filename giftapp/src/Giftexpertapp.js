import React, { useState } from 'react';

export function Giftexpertapp() {
  const [categorias, setCategorias] = useState(['Gon'])
  return (
    <>
        <h1>Giftexpertapp</h1>

        {/* LISTAMOS LOS GIFS */}
        <ol>
            {categorias.map(usercategory => (
                <li key={usercategory}>{usercategory}</li>
            ))}
        </ol>
    </>
  )
}
