import { findhero } from "../../src/bases/08-import-export"


describe('aplicando pruebas al archivo 08-import-export.js', () => { 
    test('el metodo findhero debe de retonar un id del heroe', () => {
        const num = 5;
        const result = findhero(num)
        expect(result).toEqual({ id: 5, name: 'Wolverine', owner: 'Marvel' })
     })
 })