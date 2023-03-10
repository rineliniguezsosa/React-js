import { Griditem } from '../../src/components/Griditem'
import { render,screen } from '@testing-library/react'

describe('Pruebas en el componente <Griditem/>', () => { 

    const url = "https://giphy.com/gifs/gon-u4dQ8BMugUYp2";
    const titulo = "gon GIF";

    test('Debe de coincidir con el snap shot', () => {
      const { container } = render(<Griditem url={url} titulo={titulo}/>)

      expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el url y al alt indicado', () => {
      render(<Griditem url={url} titulo={titulo}/>)
      //screen.debug()
      expect(screen.getByRole('img').alt).toBe(titulo)
      expect(screen.getByRole('img').src).toBe(url)
      //expect(screen.getByRole('img').getAttribute('src')).toBe(url)
    });

    test('Debe de mostrar el titulo en el componente',()=>{
      render(<Griditem url={url} titulo={titulo}/>)

      expect(screen.getByText(titulo)).toBeTruthy();
    })
 })