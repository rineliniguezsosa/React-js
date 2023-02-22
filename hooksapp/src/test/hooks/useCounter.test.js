import { useCounter } from "../../hooks/useCounter";
import { renderHook,act } from '@testing-library/react'


describe('Pruebas en el hook personalizado useCounter', () => {
  test.skip('debe de retonar los valores por defecto', () => {
    const {result} = renderHook(()=> useCounter(10));
    const {value} = result.current
    console.log(result)
    expect(value).toBe(10);
  });

  test.skip('debe de incrementar el contador', () => {
    const {result} = renderHook(()=> useCounter(20));
    const [incrementar] = result.current.actions
    
    act(()=>{
      incrementar()
      incrementar(2)
    })

    expect(result.current.value).toBe(23);
  });

  test('debe de decrementar el contador', () => {
    const {result} = renderHook(()=> useCounter(100));
    const [,decrement,] = result.current.actions

  });
});