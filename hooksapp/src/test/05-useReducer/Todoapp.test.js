import { render } from '@testing-library/react'
import { Todoapp } from '../../05-useReducer/Todoadd';


describe('pruebas en el componente Todoapp', () => {
  
  test('debe de mostrar el componente correctamente', () => {
    render(<Todoapp/>)
  });
});