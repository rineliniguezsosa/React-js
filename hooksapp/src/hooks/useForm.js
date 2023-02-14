import { useState } from 'react';

export const useForm = () =>{
    const [form, setform] = useState({
        username:'',
        email:'',
        password:''
    })
    const {username,email,password} = form
    return {
        form
    }
}