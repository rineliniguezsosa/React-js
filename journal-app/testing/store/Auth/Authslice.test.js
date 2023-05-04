import { authSlice,login } from "../../../src/store/Auth/Authslice";
import { initialState,demouser } from "../../fixtures/authfixtures";

describe('pruebas en Authslice.js', () => {
    

    test('debe de regresar al estado inicial y llamarse auth', () => {
        const { name,reducer } = authSlice
        expect(name).toBe('auth');

        const state = reducer(initialState,{})
       
        expect(state).toEqual(initialState);
    });

    test('debe de realizar la autenticación', () => {
        const { reducer } = authSlice

        const state = reducer(initialState,login(demouser))
        
        expect(state).toEqual({
            status: 'autenticado',
            uid: '123rjnshbd',
            email: 'rinel@google.com',
            displayname: 'demo rinel',
            photoUrl: 'http://demo.jpg',
            mensajeserror: null
          });
    });

    test('debe de realizar el logout sin argumentos', () => {
        
    });
});