import { authSlice } from "../../../src/store/Auth/Authslice";

describe('pruebas en Authslice.js', () => {
    

    test('debe de regresar al estado inicial y llamarse auth', () => {
        const { name } = authSlice
        expect(name).toBe('auth');
    });
});