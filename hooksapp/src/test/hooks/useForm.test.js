import { renderHook,act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";


describe('pruebas en el customhook useForm', () => {
    const initialState = {
        username:'rinel',
        email:'rineliniguezsosa@gmail.com',
        password:'password'
    }
    test('debe de retornar la informacion por defecto', () => {
        const { result } = renderHook(()=>useForm(initialState))
        console.log(result.current)
        expect(result.current).toEqual({
            form: {
              username: 'rinel',
              email: 'rineliniguezsosa@gmail.com',
              password: 'password'
            },
            inputchange: expect.any(Function),
            resetform: expect.any(Function)
          });    
    });

    test('debe de cambiar el nombre del formulario', () => {
        const nuevovalor = "eloy"

        const { result,inputchange } = renderHook(()=>useForm(initialState))
    });
});