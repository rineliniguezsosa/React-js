import { returnarr } from "../../src/bases/07-desestructuracion-arreglos"


describe('pruebas en el archivo 07-desestructuracion-arreglos.js', () => { 
    test('la funcion returnarr debe devolver un string y un boolean', () => { 
        const [num,boo] = returnarr()
    
        expect(num).toEqual('133')
        expect(boo).toEqual(true)
     })
})