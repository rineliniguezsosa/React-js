import { useState,useEffect } from 'react';

export const useForm = ( initialForm = {},forminputvalidaciones ={ } ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formvalidaciones, setformvalidaciones] = useState({})

    useEffect(() => {
        createvalidaciones()
    }, [formState])
    

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
        const formcheckvalues = {}

        for (const formField of Object.keys(forminputvalidaciones)) {
            const [fn,errormessage = "El campo es requerido"] = forminputvalidaciones[formField]

            formcheckvalues[`${formField} Valido`] = fn(formState[formField]) ? null : errormessage;
        }

        setformvalidaciones(formcheckvalues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formvalidaciones
    }
}