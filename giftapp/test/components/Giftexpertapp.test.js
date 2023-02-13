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
    render(<Giftexpertapp/>)
    const input = screen.getByRole('textbox')
    fireEvent.input(input,{target:{value:'pac man'}})
    expect(input.value).toBeTruthy();
    screen.debug()
  });
});