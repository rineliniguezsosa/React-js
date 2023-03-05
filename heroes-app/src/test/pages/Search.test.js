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

        screen.debug()
    });
});