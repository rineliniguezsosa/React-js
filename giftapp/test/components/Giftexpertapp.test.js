import { render,screen } from "@testing-library/react";
import { Giftexpertapp } from "../../src/Giftexpertapp";

describe('Pruebas en el componente <Giftexpertapp/>', () => {
  test('Debe de coincidir con el snapshot', () => {
    const { container } = render(<Giftexpertapp></Giftexpertapp>)
  });
  test('El state inicial debe ser gon', () => {
    render(<Giftexpertapp/>)

    expect(screen.getByText('Gon')).toBeTruthy();
  }); 
});