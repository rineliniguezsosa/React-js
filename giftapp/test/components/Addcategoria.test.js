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
      const onNewCategorias = jest.fn();
      render(<Addcategoria onNewCategorias={onNewCategorias}></Addcategoria>)

      const form = screen.getByRole('form')
      const input = screen.getByRole('textbox')
      fireEvent.input(input,{target:{value:'pikachu'}})
      fireEvent.submit(form) //EVENTO SUBMIT

      expect(input.value).toBe('');

      expect(onNewCategorias).toHaveBeenCalled(); //la funcion a sido llamada
      expect(onNewCategorias).toHaveBeenCalledTimes(1); //la funcion a sido llamadas cuantas veces ?
      expect(onNewCategorias).toHaveBeenLastCalledWith('pikachu');
      screen.debug()
  });

  test('no debe de llamar a onnewcategoria si el input esta vacio ', () => {
      const onNewCategorias = jest.fn();
      render(<Addcategoria onNewCategorias={onNewCategorias}></Addcategoria>)
      const form = screen.getByRole('form')
      fireEvent.submit(form) //EVENTO SUBMIT

      expect(onNewCategorias).toHaveBeenCalledTimes(0);
  });
});