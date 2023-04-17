import { useState } from 'react';


export const useForm = (initialForm = {}) =>{
    const [ formState, setFormState ] = useState( initialForm );
    return {

    }
}