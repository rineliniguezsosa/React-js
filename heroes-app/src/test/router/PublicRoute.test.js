import { render,screen } from '@testing-library/react'
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';


describe('pruebas en PublicRoute.js', () => {
    
    test('debe de mostrar el children si no esta autenticado', () => {
        render(<PublicRoute></PublicRoute>)
        screen.debug()
    });
});