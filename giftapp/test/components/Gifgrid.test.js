import { render,screen } from '@testing-library/react'
import { Gifgrid } from '../../src/components/Gifgrid';
import { useFetchgifs } from '../../src/hooks/useFetchgifs'

describe('Prueba en el componente <Gifgrid/>', () => {
  const usercategory = 'goku'
  test('debe de mostrar el loading inicialmente', () => {
    render(<Gifgrid usercategory={usercategory}></Gifgrid>)
    
    expect(screen.getByText('Cargando ...')).toBeTruthy();
    //screen.debug()
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchgifs', () => {
    
  });
});