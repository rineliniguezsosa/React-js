import { render,screen } from '@testing-library/react'
import { Gifgrid } from '../../src/components/Gifgrid';
import { useFetchgifs } from '../../src/hooks/useFetchgifs' //1

jest.mock('../../src/hooks/useFetchgifs') //jest.mock simula un modulo en esta caso simula claro el 
//hook useFetchgifs //2

describe('Prueba en el componente <Gifgrid/>', () => {
  const usercategory = 'goku'
  test('debe de mostrar el loading inicialmente', () => {

    useFetchgifs.mockReturnValue({ //3 simulamos la devolucion del mock o de la funcion
      images:[],
      cargando:true,
    })

    render(<Gifgrid usercategory={usercategory}></Gifgrid>)
    
    expect(screen.getByText('Cargando ...')).toBeTruthy();
    //screen.debug()
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchgifs', () => {
    const gifs = [
      {
        id:'kmdkmdd',
        titulo:'one punch man',
        url:'http://localhost/onepunchman'
      },
      {
        id:'ujdghd',
        titulo:'goku',
        url:'http://localhost/goku'
      }
  ]
    useFetchgifs.mockReturnValue({ // simulamos la devolucion del mock o de la funcion ahora con datos
      images:gifs,
      cargando:false,
    })

    render(<Gifgrid usercategory={usercategory}></Gifgrid>)

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(2);
    screen.debug()
  });
});