import { render,screen } from '@testing-library/react'
import { Todoapp } from '../../05-useReducer/Todoapp';
import { useTodo } from '../../hooks/useTodo';


describe('pruebas en el componente Todoapp', () => {
  
  test('debe de mostrar el componente correctamente', () => {
    render(<Todoapp/>)
    screen.debug()
  });
});