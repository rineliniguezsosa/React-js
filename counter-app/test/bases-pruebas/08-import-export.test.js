import { findhero } from "../../src/bases/08-import-export"


describe('aplicando pruebas al archivo 08-import-export.js', () => { 
    test('el metodo findhero debe de retonar un id del heroe', () => {
        const num = 5;
        const result = findhero(num)
        expect(result).toEqual({ id: 5, name: 'Wolverine', owner: 'Marvel' })
     })

    test('el metodo findhero debe de retornar undefined si no existe', () => { 
        const num2 = 100;
        const result2 = findhero(num2)
        expect(result2).toBeUndefined()
    })

    test('el metodo findowners debe de retornar un arreglo con los heroes de DC',()=>{

    })
 })