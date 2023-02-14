import { useState } from 'react';

export const useForm = () =>{
    const [form, setform] = useState({
        username:'',
        email:'',
        password:''
    })
    // const {username,email,password} = form
    const inputchange = (event) =>{
        const {name,value} = event.target
        setform({
          ...form,
          [name]:value //PROPIEDAS COMPUTADAS DE OBJETOS
      })
    }
    return {
        form,
        inputchange
    }
}