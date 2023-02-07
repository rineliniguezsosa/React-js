import { findhero, findowners } from "../../src/bases/08-import-export"
import '@testing-library/jest-dom'

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
        //const hero = {}
        const myheroesdc = findowners('DC')
        expect(myheroesdc).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
    })
    
 })