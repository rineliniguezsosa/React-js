import {render,screen} from '@testing-library/react'
import { MultipleCustomHook } from '../../components/MultipleCustomHook';

describe('Pruebas en MultipleCustomHook', () => {
  test('debe de mostrar el componente', () => {
    render(<MultipleCustomHook></MultipleCustomHook>)

    const elemento = screen.getByRole('button',{name:'Next quote'})
    
    console.log(elemento.disabled)
    // expect(container).toMatchSnapshot();
    screen.debug();
    expect(elemento.disabled).toBeTruthy();
  });
});