import {render,screen} from '@testing-library/react'
import { MultipleCustomHook } from '../../components/MultipleCustomHook';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch')

describe('Pruebas en MultipleCustomHook', () => {
  test('debe de mostrar el componente', () => {

    useFetch.mockReturnValue({
      data:null,
      cargando:true,
      errores:null
    })

    render(<MultipleCustomHook></MultipleCustomHook>)

    const elemento = screen.getByRole('button',{name:'Next quote'})
    
    console.log(elemento.disabled)

    expect(elemento.disabled).toBeTruthy();
    screen.debug();
  });

  test('debe de retonar un quote', () => {

    useFetch.mockReturnValue({
      data:[{author:'Rinel iñiguez',quote:'Los modales hace al hombre'}],
      cargando:false,
      errores:null
    })

    render(<MultipleCustomHook></MultipleCustomHook>)

    expect(screen.getByText('Rinel iñiguez')).toBeTruthy();
    expect(screen.getByText('Los modales hace al hombre')).toBeTruthy();
    
    screen.debug()
  });
});