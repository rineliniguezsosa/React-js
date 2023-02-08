import { render,screen } from "@testing-library/react"
import { CounterApp } from "../../src/CounterApp"

describe('pruebas en el componente <CounterApp/>', () => { 
    test('Debe de hacer match con el snapshot',()=>{
     const { container } = render(<CounterApp value={100}></CounterApp>)
     expect(container).toMatchSnapshot();
    })

    test('Debe mostrar un valor inicial de 100', () => {
      render(<CounterApp value={100}></CounterApp>)
      expect(screen.getByText(100)).toBeTruthy();
    });
})