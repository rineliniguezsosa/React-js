import { renderHook } from "@testing-library/react";
import { useFetchgifs } from "../../src/hooks/useFetchgifs";

describe('Pruebas en el custom Hook useFetchgifs', () => {
  test('Debe de mostrar el estado inicial', () => {
      const { result } = renderHook(()=> useFetchgifs('saitama'))
      const { images,cargando}  = result.current;

      expect(images.length).toBe(0);
      expect(cargando).toBeTruthy();
  });

  test('Debe de retornar las imagenes y cargando debera ser falso', () => {
    
  });
});