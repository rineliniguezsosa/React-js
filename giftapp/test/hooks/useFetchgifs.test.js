import { renderHook, waitFor } from "@testing-library/react";
import { useFetchgifs } from "../../src/hooks/useFetchgifs";

describe('Pruebas en el custom Hook useFetchgifs', () => {
  test('Debe de mostrar el estado inicial', () => {
      const { result } = renderHook(()=> useFetchgifs('saitama'))
      const { images,cargando}  = result.current;

      expect(images.length).toBe(0);
      expect(cargando).toBeTruthy();
  });

  test('Debe de retornar las imagenes y cargando debera ser falso', async() => {
    const { result } = renderHook(()=> useFetchgifs('transformers'))
    await waitFor(()=>{
      expect(result.current.images.length).toBeGreaterThan(0);
    })

    const {images,cargando} = result.current
  });
});