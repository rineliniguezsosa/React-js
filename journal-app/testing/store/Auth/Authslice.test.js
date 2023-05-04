import { authSlice } from "../../../src/store/Auth/Authslice";
import { initialState } from "../../fixtures/authfixtures";

describe('pruebas en Authslice.js', () => {
    

    test('debe de regresar al estado inicial y llamarse auth', () => {
        const { name,reducer } = authSlice
        expect(name).toBe('auth');

        const state = reducer(initialState,{})
    });
});