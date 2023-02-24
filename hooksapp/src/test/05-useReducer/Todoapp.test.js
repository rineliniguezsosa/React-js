import { render,screen } from '@testing-library/react'
import { Todoapp } from '../../05-useReducer/Todoapp';
import { useTodo } from '../../hooks/useTodo';

jest.mock('../../hooks/useTodo')

describe('pruebas en el componente Todoapp', () => {

  useTodo.mockReturnValue({
    state:[{id:1,descripcion:'tomar el curso react',realizado:false}],
    handleform:jest.fn(),
    removeItem:jest.fn(),
    tareacompletada:jest.fn()
  })

  test('debe de mostrar el componente correctamente', () => {
    render(<Todoapp/>)
    
    expect(screen.getByText('tomar el curso react')).toBeTruthy();
  });
});