import { render,screen } from "@testing-library/react";
import { Giftexpertapp } from "../../src/Giftexpertapp";

describe('Pruebas en el componente <Giftexpertapp/>', () => {
  test('El state inicial debe ser gon', () => {
    render(<Giftexpertapp/>)
  }); 
});