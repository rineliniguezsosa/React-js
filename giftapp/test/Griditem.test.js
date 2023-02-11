import { Griditem } from '../src/components/Griditem'
import { render } from '@testing-library/react'

describe('Pruebas en el componente <Griditem/>', () => { 
    test('Debe de coincidir con el snap shot', () => {
      const { container } = render(<Griditem url="https://giphy.com/gifs/gon-u4dQ8BMugUYp2" titulo="gon GIF"/>)

      expect(container).toMatchSnapshot();
    });
 })