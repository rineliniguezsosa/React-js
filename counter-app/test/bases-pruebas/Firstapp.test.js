import { render } from '@testing-library/react'
import { Firstapp } from '../../src/Firstapp'

describe('Pruebas en el componente <Firstapp>', () => { 
  test('Deberia de coincidir con el snapshot', () => { 
      render(<Firstapp></Firstapp>)
   })
 })