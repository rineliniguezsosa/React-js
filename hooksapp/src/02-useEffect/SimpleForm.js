import { useState } from 'react';

export const SimpleForm = () => {
    const [form, setForm] = useState({
        username:'rinel',
        email:'rineliniguezsosa@gmail.com'
    })

    const {username,email} = form
  return (
    <>
    <span>SimpleForm</span>
    <hr></hr>
    <input type="text" placeholder="username" value={username} name="username" className="form-control"></input>

    <input type="email" placeholder="rineliniguezsosa@gmail.com" value={email} name="email" className="form-control mt-2"></input>
    </>
  )
}
