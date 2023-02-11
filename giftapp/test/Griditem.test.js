import { Griditem } from '../src/components/Griditem'
import { render } from '@testing-library/react'

describe('Pruebas en el componente <Griditem/>', () => { 
    test('Debe de coincidir con el snap shot', () => {
      const { container } = render(<Griditem/>)
    });
 })