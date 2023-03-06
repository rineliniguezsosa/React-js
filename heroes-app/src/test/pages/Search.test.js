import { display } from '@mui/system';
import {render,screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../heroes/pages/Search';



describe('prueba en Search.js', () => {
    test('debe de coincidir con el snapshot', () => {
        const { container } = render(
        <MemoryRouter><Search></Search></MemoryRouter>
        )

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar a batman y el input con el valor del query', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}><Search></Search></MemoryRouter>
            )
        
            const input = screen.getByRole('textbox')
           
            expect(input.value).toBe('batman');

            const alert = screen.getByLabelText('danger-alert')
            console.log(alert.style.display)
            expect(alert.style.display).toBe('none');
        screen.debug()
    });

    test('debe de mostrar un error si encuentra con un error al escribir batman234', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman234']}><Search></Search></MemoryRouter>
            )
            const alert = screen.getByLabelText('danger-alert')
            expect(alert.style.display).toBe('')
    });

    test('debe de llamar al navigate a la pantalla nueva', () => {
        
    });
});