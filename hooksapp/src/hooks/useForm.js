import { useState } from 'react';

export const useForm = (estadoinicial ={}) =>{
    const [form, setform] = useState(estadoinicial)
    // const {username,email,password} = form
    const inputchange = (event) =>{
        const {name,value} = event.target
        setform({
          ...form,
          [name]:value //PROPIEDAS COMPUTADAS DE OBJETOS
      })
    }

    const resetform = () =>{
        setform(estadoinicial)
    }
    return {
        form,
        inputchange,
        resetform
    }
}