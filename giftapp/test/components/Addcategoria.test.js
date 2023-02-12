import { fireEvent, render,screen } from '@testing-library/react'
import { Addcategoria } from '../../src/components/Addcategoria';


describe('Pruebas en el componente <Addcategoria/>', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
      render(<Addcategoria onNewCategorias={()=> {}}></Addcategoria>)
      const input = screen.getByRole('textbox') //textbox --> html input 
      fireEvent.input(input,{target:{value:'Saitama'}}) //input --> metodo onchange
      expect(input.value).toBe('Saitama');
  });

  test('debe de llamar onnewcategoria si el input tiene un valor', () => {
      render(<Addcategoria onNewCategorias={()=> {}}></Addcategoria>)

      const form = screen.getByRole('form')
      const input = screen.getByRole('textbox')
      fireEvent.input(input,{target:{value:'pikachu'}})
      fireEvent.submit(form) //EVENTO SUBMIT
      expect(input.value).toBe('');
      screen.debug()
  });
});