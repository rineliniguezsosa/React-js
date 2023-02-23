import {render,screen} from '@testing-library/react'
import { MultipleCustomHook } from '../../components/MultipleCustomHook';

describe('Pruebas en MultipleCustomHook', () => {
  test('debe de mostrar el componente', () => {
    render(<MultipleCustomHook></MultipleCustomHook>)

    const elemento = screen.getByRole('button',{name:'Next quote'})
    
  });
});