import { render } from '@testing-library/react'
import { Gifgrid } from '../../src/components/Gifgrid';

describe('Prueba en el componente <Gifgrid/>', () => {
  test('debe de mostrar el loading inicialmente', () => {
    render(<Gifgrid usercategory={usercategory}></Gifgrid>)
  });
});