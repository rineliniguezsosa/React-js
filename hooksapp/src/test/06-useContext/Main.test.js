import { Main } from "../../06-useContext/Main";
import { render,screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('pruebas en Main.js react router', () => {
    // <MemoryRouter> almacena sus ubicaciones internamente en una matriz
    // <MemoryRouter initialEntries>el valor predeterminado es ["/"](una sola entrada en la /URL raíz)
    test('debe de renderizar la ruta por defecto', () => {
      render(
        <MemoryRouter>
            <Main></Main>
        </MemoryRouter>
      )
     expect(screen.getByText('Homepage:')).toBeTruthy();
    });

    test('debe de mostrar el Loginpage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <Main></Main>
            </MemoryRouter>
          )
        
          expect(screen.getByText('Loginpage')).toBeTruthy();

          //screen.debug()
    });
});