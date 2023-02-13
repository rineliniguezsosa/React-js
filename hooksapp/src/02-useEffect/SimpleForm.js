import { useState } from 'react';

export const SimpleForm = () => {
    const [form, setForm] = useState({
        username:'rinel',
        email:'rineliniguezsosa@gmail.com'
    })
  return (
    <>
    <span>SimpleForm</span>
    <hr></hr>
    <input type="text" placeholder="username" name="username" className="form-control"></input>

    <input type="email" placeholder="rineliniguezsosa@gmail.com" name="email" className="form-control mt-2"></input>
    </>
  )
}
