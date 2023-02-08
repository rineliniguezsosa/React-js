import { render } from '@testing-library/react'
import { Firstapp } from '../../src/Firstapp'

describe('Pruebas en el componente <Firstapp>', () => { 
  test('Deberia de coincidir con el snapshot', () => { 
      const { container } = render(<Firstapp name="rinel" edad={27}/>)

      expect(container).toMatchSnapshot();
   })
   test('debe  de mostrar el titulo h1', () => {
     const { container,getByText } = render(<Firstapp name="rinel" edad={27}/>)
   });
 })