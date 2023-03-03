import { render,screen } from '@testing-library/react'
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';


describe('pruebas en PublicRoute.js', () => {
    
    test('debe de mostrar el children si no esta autenticado', () => {
        const initialState = {
            logged:false
        }
        render(
        <AuthContext.Provider value={ initialState }>
            <PublicRoute>
                <h1>ruta publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
        )

        expect(screen.getByText('ruta publica')).toBeTruthy();
        screen.debug()
    });
});