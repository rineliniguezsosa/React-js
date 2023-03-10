import { fireEvent, render,screen } from "@testing-library/react"
import { CounterApp } from "../../src/CounterApp"

describe('pruebas en el componente <CounterApp/>', () => { 
    test('Debe de hacer match con el snapshot',()=>{
     const { container } = render(<CounterApp value={10}></CounterApp>)
     expect(container).toMatchSnapshot();
    })

    test('Debe mostrar un valor inicial de 100', () => {
      render(<CounterApp value={100}></CounterApp>)
      expect(screen.getByText(100)).toBeTruthy();
    });

    test('Debe de aumentar con el boton +1', () => {
      render(<CounterApp value={13}></CounterApp>)
      fireEvent.click(screen.getByText('+1'))
      expect(screen.getByText(14)).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', () => {
      render(<CounterApp value={13}></CounterApp>)
      fireEvent.click(screen.getByText('-1'))
      expect(screen.getByText(12)).toBeTruthy();
    });

    test('Debe de resetar con el boton reset', () => {
      render(<CounterApp value={13}></CounterApp>)
      fireEvent.click(screen.getByText('+1'))
      fireEvent.click(screen.getByText('+1'))
      fireEvent.click(screen.getByText('reset'))
      expect(screen.getByText(13)).toBeTruthy();
    });
})