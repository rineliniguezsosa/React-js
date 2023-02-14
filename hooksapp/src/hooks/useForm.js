import { useState } from 'react';

export const useForm = () =>{
    const [form, setform] = useState({
        username:'',
        email:'',
        password:''
    })
    return {

    }
}