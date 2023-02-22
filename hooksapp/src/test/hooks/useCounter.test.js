import { useCounter } from "../../hooks/useCounter";
import { renderHook } from '@testing-library/react'


describe('Pruebas en el hook personalizado useCounter', () => {
  test('debe de retonar los valores por defecto', () => {
    const {result} = renderHook(()=> useCounter(10));
    const {value} = result.current
    console.log(result)
    expect(value).toBe(10);
  });
});