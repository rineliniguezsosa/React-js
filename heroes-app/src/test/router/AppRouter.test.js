import { AppRouter } from "../../router/AppRouter";
import {render,screen} from '@testing-library/react'
import { AuthContext } from "../../auth";
import { MemoryRouter } from "react-router-dom";



describe('pruebas en AppRouter.js', () => {
    test.skip('debe de mostrar el login no si esta autenticado', () => {
        const initialState = {
            logged:false,
        }
        render(
        <AuthContext.Provider value={ initialState }>
            <MemoryRouter initialEntries={['/marvel']}>
                <AppRouter></AppRouter>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getAllByText('Login').length).toBe(2);

        screen.debug()
    });

    test('debe de mostrar el componente marvel si esta autenticado', () => {
        const initialState = {
            logged:true,
            user:{id:'129',name:'rolando fabian'}
        }
        render(
            <AuthContext.Provider value={ initialState }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            </AuthContext.Provider>)

        screen.debug()  
        
    });
});