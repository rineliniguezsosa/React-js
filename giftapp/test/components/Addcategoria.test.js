import { render } from '@testing-library/react'
import { Addcategoria } from '../../src/components/Addcategoria';


describe('Pruebas en el componente <Addcategoria/>', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
      render(<Addcategoria></Addcategoria>)
  });
});