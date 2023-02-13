import { render,screen,fireEvent } from "@testing-library/react";
import { Giftexpertapp } from "../../src/Giftexpertapp";

describe('Pruebas en el componente <Giftexpertapp/>', () => {
  test('Debe de coincidir con el snapshot', () => {
    const { container } = render(<Giftexpertapp></Giftexpertapp>)
    expect(container).toMatchSnapshot();
  });

  test('El state inicial debe ser gon', () => {
    render(<Giftexpertapp/>)

    expect(screen.getByText('Gon')).toBeTruthy();
  }); 

  test('Cambiando el valor de la caja de texto y debe de coincidir', () => {
   
  });
});