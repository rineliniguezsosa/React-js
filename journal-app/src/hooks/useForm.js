import { useState } from 'react';

export const useForm = ( initialForm = {},formvalidaciones ={ } ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createvalidaciones = () =>{
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}