import { render,screen } from '@testing-library/react'
import { MemoryRouter,Routes,Route } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';


describe('pruebas en PublicRoute.js', () => {
    const initialState = {
        logged:false
    }
    test('debe de mostrar el children si no esta autenticado', () => {
        
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

    test('debe de mostrar si esta autenticado', () => {
        const initialState = {
            logged:true,
            user:{id:'124',name:'rinel chan'}
        }
        render(
        <AuthContext.Provider value={ initialState }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='/login' element={<PublicRoute>
                                            <h1>ruta publica</h1>
                                                </PublicRoute>}>

                    </Route>
                    <Route path='marvel' element={<h1>pagina marvel</h1>}></Route>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
        )

        screen.debug()

        expect(screen.getByText('pagina marvel')).toBeTruthy();
    });
});