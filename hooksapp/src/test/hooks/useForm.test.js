import { renderHook,act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";


describe('pruebas en el customhook useForm', () => {
    const initialState = {
        username:'rinel',
        email:'rineliniguezsosa@gmail.com',
        password:'password'
    }
    test.skip('debe de retornar la informacion por defecto', () => {
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

    // test.skip('debe de cambiar el nombre del formulario', () => {
    //     const nuevovalor = "eloy"

    //     const { result } = renderHook(()=>useForm(initialState))
    //     //console.log(initialState.username)
    //     const { inputchange } = result.current
    //    //const { username } = result.current.form
    //     //console.log(inputchange)
    //     act(()=>{
    //         inputchange({target:{name:'username',value:nuevovalor}})
    //     })
    //    // console.log(result.current.name)
    //     expect(result.current.form.username).toBe(initialState.username);
        
    // });

    test.skip('se debe de resetear el formulario', () => {
        
    });
});