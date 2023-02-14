import { useState,useEffect } from 'react';

export const FormCustomHook = () => {
    const [form, setForm] = useState({
        username:'rinel',
        email:'rineliniguezsosa@gmail.com'
    })

    const {username,email} = form
    
    const inputchange = (event) =>{
        const {name,value} = event.target
        setForm({
          ...form,
          [name]:value //PROPIEDAS COMPUTADAS DE OBJETOS
      })
    }

    useEffect(()=>{
      console.log('Me ejecute')
    },[email])
  return (
    <>
    <span>formulario con CustomHook</span>
    <hr></hr>
    <input type="text" onChange={inputchange} placeholder="username" value={username} name="username" className="form-control"></input>

    <input type="email" onChange={inputchange} placeholder="rineliniguezsosa@gmail.com" value={email} name="email" className="form-control mt-2"></input>

    <input type="password" onChange={inputchange} placeholder="password" value={password} name="password" className="form-control mt-2"></input>
    </>
  )
}
