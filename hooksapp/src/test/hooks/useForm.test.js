import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";


describe('pruebas en el customhook useForm', () => {
    const initialState = {
        username:'rinel',
        email:'rineliniguezsosa@gmail.com',
        password:'password'
    }
    test('debe de retornar la informacion por defecto', () => {
        const { result } = renderHook(()=>useForm(initialState))
        console.log(result)
    });
});