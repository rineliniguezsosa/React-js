import { AppRouter } from "../../router/AppRouter";
import {render,screen} from '@testing-library/react'
import { AuthContext } from "../../auth";
import { MemoryRouter } from "react-router-dom";



describe('pruebas en AppRouter.js', () => {
    test('debe de mostrar el login si esta autenticado', () => {
        render(
        <AuthContext.Provider>

        </AuthContext.Provider>)
    });
});