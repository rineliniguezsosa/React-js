import { render,screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from "../../auth";
import { PrivateRoute } from "../../router/PrivateRoute";



describe('prueba en PrivateRoute.js', () => {

    test('debe de mostrar el children si esta autenticado', () => {
        const initialState = {
            logged:true,
            user:{id:'124',name:'rinel chan'}
        }

        render(
        <AuthContext.Provider value={ initialState }>
            <MemoryRouter>
                <PrivateRoute>
                    <h1>ruta privada</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
        )
        
        expect(screen.getByText('ruta privada')).toBeTruthy();

        screen.debug()
        
    });
});